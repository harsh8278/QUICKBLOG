import React from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogData = new Date(createdAt);

  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post("/api/blog/delete", { id: blog._id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", {
        id: blog._id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{BlogData.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-2 py-4 flex text-xs gap-3">
        <button
          onClick={togglePublish}
          className="border px-2 py-0.5 mt-1 rounded cursor-pointer"
        >
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          onClick={deleteBlog}
          className="w-8 hover:scale-110 transition-all cursor-pointer"
          alt=""
          src="data:image/svg+xml,%3csvg%20width='33'%20height='33'%20viewBox='0%200%2033%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16.1368'%20cy='16.1368'%20r='15.6368'%20fill='%23FEF7F5'%20stroke='%23FFE7E2'/%3e%3crect%20x='12.2891'%20y='19.0146'%20width='9.38287'%20height='1.12594'%20rx='0.562972'%20transform='rotate(-45.7402%2012.2891%2019.0146)'%20fill='%23FFA2A2'/%3e%3crect%20x='19.0078'%20y='19.7559'%20width='9.38287'%20height='1.12594'%20rx='0.562972'%20transform='rotate(-135.74%2019.0078%2019.7559)'%20fill='%23FFA2A2'/%3e%3c/svg%3e"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
