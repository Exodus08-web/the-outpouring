import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function WebsiteContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    const { data, error } = await supabase
      .from("website_content")
      .select("*")
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setContent(data);
    setLoading(false);
  }
  async function saveContent() {
  const { error } = await supabase
    .from("website_content")
    .update({
      hero_title: content.hero_title,
      hero_subtitle: content.hero_subtitle,
      healing_title: content.healing_title,
      healing_description: content.healing_description,
      hotline: content.hotline,
      about_sent_man: content.about_sent_man,
      partnership_text: content.partnership_text,
    })
    .eq("id", content.id);

  if (error) {
    alert("Failed to save.");
    console.log(error);
    return;
  }

  alert("All changes saved successfully!");
}

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-black text-red-500">
        Website Content
      </h1>

      <div className="mt-8 space-y-6">

        <div>
          <label className="block mb-2 font-bold">
            Hero Title
          </label>

         <input
  value={content.hero_title || ""}
  onChange={(e) =>
    setContent({
      ...content,
      hero_title: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 p-4"
/>
        </div>

        <div>
          <label className="block mb-2 font-bold">
            Hero Subtitle
          </label>

          <input
  value={content.hero_subtitle || ""}
  onChange={(e) =>
    setContent({
      ...content,
      hero_subtitle: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 p-4"
/>
        </div>

        <div>
          <label className="block mb-2 font-bold">
            Hotline
          </label>

          <input
  value={content.hotline || ""}
  onChange={(e) =>
    setContent({
      ...content,
      hotline: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 p-4"
/>
        </div>
<div>
  <label className="block mb-2 font-bold">
    Healing Title
  </label>

  <input
    value={content.healing_title || ""}
    onChange={(e) =>
      setContent({
        ...content,
        healing_title: e.target.value,
      })
    }
    className="w-full rounded-xl bg-white/10 p-4"
  />
</div>
<div>
  <label className="block mb-2 font-bold">
    Healing Description
  </label>

  <textarea
    value={content.healing_description || ""}
    onChange={(e) =>
      setContent({
        ...content,
        healing_description: e.target.value,
      })
    }
    className="w-full rounded-xl bg-white/10 p-4"
    rows="4"
  />
</div>
<div>
  <label className="block mb-2 font-bold">
    About The Sent Man
  </label>

  <textarea
    value={content.about_sent_man || ""}
    onChange={(e) =>
      setContent({
        ...content,
        about_sent_man: e.target.value,
      })
    }
    className="w-full rounded-xl bg-white/10 p-4"
    rows="5"
  />
</div>
<div>
  <label className="block mb-2 font-bold">
    Partnership Text
  </label>

  <textarea
    value={content.partnership_text || ""}
    onChange={(e) =>
      setContent({
        ...content,
        partnership_text: e.target.value,
      })
    }
    className="w-full rounded-xl bg-white/10 p-4"
    rows="5"
  />
</div>
      </div>
<button
  onClick={saveContent}
  className="mt-8 rounded-xl bg-red-600 px-6 py-4 font-bold hover:bg-red-700"
>
  Save Changes
</button>
    </div>
  );
}

export default WebsiteContent;