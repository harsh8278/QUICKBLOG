import React from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const CommentsTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id:_id,
      });  
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Comment?"
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog.title || "No blog title"} 
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name || "No name"}
        <br />
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content || "No content"}
      </td>
      <td className="px-6 py-4 max-sm:hidden">  
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? 
            <svg
              onClick={approveComment}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#01f912"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#01f912"
                  stroke-width="1.5"
                ></circle>
                <path
                  d="M8.5 12.5L10.5 14.5L15.5 9.5"
                  stroke="#01f912"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
           : 
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          }
          <img onClick={deleteComment}
            src="data:image/svg+xml,%3csvg%20fill='%23000000'%20viewBox='0%200%201024%201024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M831.24%20280.772c5.657%200%2010.24-4.583%2010.24-10.24v-83.528c0-5.657-4.583-10.24-10.24-10.24H194.558a10.238%2010.238%200%2000-10.24%2010.24v83.528c0%205.657%204.583%2010.24%2010.24%2010.24H831.24zm0%2040.96H194.558c-28.278%200-51.2-22.922-51.2-51.2v-83.528c0-28.278%2022.922-51.2%2051.2-51.2H831.24c28.278%200%2051.2%2022.922%2051.2%2051.2v83.528c0%2028.278-22.922%2051.2-51.2%2051.2z'%3e%3c/path%3e%3cpath%20d='M806.809%20304.688l-58.245%20666.45c-.544%206.246-6.714%2011.9-12.99%2011.9H290.226c-6.276%200-12.447-5.654-12.99-11.893L218.99%20304.688c-.985-11.268-10.917-19.604-22.185-18.619s-19.604%2010.917-18.619%2022.185l58.245%20666.45c2.385%2027.401%2026.278%2049.294%2053.795%2049.294h445.348c27.517%200%2051.41-21.893%2053.796-49.301l58.244-666.443c.985-11.268-7.351-21.201-18.619-22.185s-21.201%207.351-22.185%2018.619zM422.02%20155.082V51.3c0-5.726%204.601-10.342%2010.24-10.342h161.28c5.639%200%2010.24%204.617%2010.24%2010.342v103.782c0%2011.311%209.169%2020.48%2020.48%2020.48s20.48-9.169%2020.48-20.48V51.3c0-28.316-22.908-51.302-51.2-51.302H432.26c-28.292%200-51.2%2022.987-51.2%2051.302v103.782c0%2011.311%209.169%2020.48%2020.48%2020.48s20.48-9.169%2020.48-20.48z'%3e%3c/path%3e%3cpath%20d='M496.004%20410.821v460.964c0%2011.311%209.169%2020.48%2020.48%2020.48s20.48-9.169%2020.48-20.48V410.821c0-11.311-9.169-20.48-20.48-20.48s-20.48%209.169-20.48%2020.48zm-192.435%201.767l39.936%20460.964c.976%2011.269%2010.903%2019.612%2022.171%2018.636s19.612-10.903%2018.636-22.171l-39.936-460.964c-.976-11.269-10.903-19.612-22.171-18.636s-19.612%2010.903-18.636%2022.171zm377.856-3.535l-39.936%20460.964c-.976%2011.269%207.367%2021.195%2018.636%2022.171s21.195-7.367%2022.171-18.636l39.936-460.964c.976-11.269-7.367-21.195-18.636-22.171s-21.195%207.367-22.171%2018.636z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
            className="w-5 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentsTableItem;
