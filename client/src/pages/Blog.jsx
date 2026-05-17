import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();

  const { axios } = useAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blog: id,
        name,
        content,
      });
      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src="https://quickblog-gs.vercel.app/assets/gradientBackground-BA3Ck2my.png"
        className="absolute -top-50 -z-1 opacity-50"
      />

      <Navbar />

      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {data.createAt}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800 ">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          MKKAAA GGHH
        </p>
      </div>

      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} className="rounded-3xl mb-5" />

        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Comments Section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex item-center gap-2 mb-2">
                  <img
                    alt=""
                    class="w-6"
                    src="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ccircle%20cx='12'%20cy='9'%20r='3'%20stroke='%236b6b6b'%20stroke-width='1.5'%3e%3c/circle%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20stroke='%236b6b6b'%20stroke-width='1.5'%3e%3c/circle%3e%3cpath%20d='M17.9691%2020C17.81%2017.1085%2016.9247%2015%2011.9999%2015C7.07521%2015%206.18991%2017.1085%206.03076%2020'%20stroke='%236b6b6b'%20stroke-width='1.5'%20stroke-linecap='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
                  />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {item.createdAt}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Section */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment"
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Share Buttons */}

        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <img
              width="50"
              alt=""
              src="data:image/svg+xml,%3csvg%20width='58'%20height='58'%20viewBox='0%200%2058%2058'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_8593_1246)'%3e%3cpath%20d='M29%2049C41.7025%2049%2052%2038.7025%2052%2026C52%2013.2975%2041.7025%203%2029%203C16.2975%203%206%2013.2975%206%2026C6%2038.7025%2016.2975%2049%2029%2049Z'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M30.8078%2035.7731H26.5807V26.7731H24.4688V23.2991H26.5807V21.2181C26.5807%2018.3891%2027.7687%2016.7051%2031.1617%2016.7051H33.9827V20.1751H32.2207C30.9017%2020.1751%2030.8137%2020.6591%2030.8137%2021.5641L30.8078%2023.2991H34.0028L33.6287%2026.7691H30.8078V35.7691V35.7731Z'%20fill='%235044E5'/%3e%3cdefs%3e%3cfilter%20id='filter0_d_8593_1246'%20x='0'%20y='0'%20width='58'%20height='58'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.161%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_8593_1246'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_8593_1246'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e"
            />
            <img
              width="50"
              alt=""
              src="data:image/svg+xml,%3csvg%20width='59'%20height='59'%20viewBox='0%200%2059%2059'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_8593_1250)'%3e%3cpath%20d='M29.24%2049.48C42.0751%2049.48%2052.48%2039.0751%2052.48%2026.24C52.48%2013.4049%2042.0751%203%2029.24%203C16.4049%203%206%2013.4049%206%2026.24C6%2039.0751%2016.4049%2049.48%2029.24%2049.48Z'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M38.7789%2020.3267C38.0648%2020.6427%2037.3074%2020.8504%2036.5319%2020.9427C37.3486%2020.4542%2037.9599%2019.6855%2038.2519%2018.7797C37.4838%2019.2354%2036.6433%2019.556%2035.7669%2019.7277C35.2301%2019.1557%2034.5337%2018.7582%2033.7682%2018.5868C33.0027%2018.4154%2032.2033%2018.4779%2031.4738%2018.7664C30.7443%2019.0548%2030.1182%2019.5558%2029.6769%2020.2044C29.2356%2020.853%2028.9994%2021.6193%2028.9989%2022.4037C28.9983%2022.7039%2029.0319%2023.0032%2029.0989%2023.2957C27.544%2023.2176%2026.023%2022.8133%2024.6344%2022.1092C23.2458%2021.4051%2022.0209%2020.4169%2021.0389%2019.2087C20.5386%2020.0698%2020.3853%2021.0892%2020.6101%2022.0593C20.8349%2023.0294%2021.4209%2023.8775%2022.2489%2024.4307C21.6279%2024.4116%2021.0205%2024.2435%2020.4779%2023.9407V23.9927C20.4783%2024.8949%2020.7903%2025.7692%2021.3612%2026.4677C21.9322%2027.1662%2022.7269%2027.6459%2023.6109%2027.8257C23.2749%2027.9172%2022.9282%2027.9632%2022.5799%2027.9627C22.3346%2027.9628%2022.0898%2027.9393%2021.8489%2027.8927C22.0991%2028.67%2022.5858%2029.3497%2023.2411%2029.8368C23.8964%2030.324%2024.6876%2030.5942%2025.5039%2030.6097C24.1172%2031.6964%2022.4057%2032.2856%2020.6439%2032.2827C20.3321%2032.2832%2020.0206%2032.2652%2019.7109%2032.2287C21.5006%2033.3787%2023.5837%2033.9887%2025.7109%2033.9857C27.175%2033.9956%2028.6265%2033.7145%2029.981%2033.1587C31.3356%2032.603%2032.5663%2031.7836%2033.6015%2030.7484C34.6368%2029.7131%2035.4561%2028.4824%2036.0119%2027.1279C36.5677%2025.7733%2036.8488%2024.3218%2036.8389%2022.8577C36.8389%2022.6877%2036.8389%2022.5197%2036.8279%2022.3517C37.5937%2021.7984%2038.2547%2021.113%2038.7799%2020.3277L38.7789%2020.3267Z'%20fill='%235044E5'/%3e%3cdefs%3e%3cfilter%20id='filter0_d_8593_1250'%20x='0'%20y='0'%20width='58.4766'%20height='58.48'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.161%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_8593_1250'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_8593_1250'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e"
            />
            <img
              width="50"
              alt=""
              src="data:image/svg+xml,%3csvg%20width='59'%20height='59'%20viewBox='0%200%2059%2059'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_8593_1254)'%3e%3cpath%20d='M29.239%2049.478C42.0735%2049.478%2052.478%2039.0735%2052.478%2026.239C52.478%2013.4045%2042.0735%203%2029.239%203C16.4045%203%206%2013.4045%206%2026.239C6%2039.0735%2016.4045%2049.478%2029.239%2049.478Z'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M25.2874%2033.389C23.3426%2033.3991%2021.471%2032.6475%2020.0734%2031.295C19.3908%2030.6415%2018.8476%2029.8566%2018.4765%2028.9876C18.1054%2028.1186%2017.9141%2027.1834%2017.9141%2026.2385C17.9141%2025.2935%2018.1054%2024.3583%2018.4765%2023.4893C18.8476%2022.6203%2019.3908%2021.8354%2020.0734%2021.182C21.436%2019.877%2023.2384%2019.1304%2025.1246%2019.0896C27.0109%2019.0489%2028.8438%2019.717%2030.2614%2020.962L28.0894%2023.026C27.2994%2022.3796%2026.3102%2022.0263%2025.2894%2022.026C24.1552%2022.0097%2023.0609%2022.4442%2022.2467%2023.2341C21.4326%2024.024%2020.9653%2025.1048%2020.9474%2026.239C20.9664%2027.3721%2021.4339%2028.4515%2022.2474%2029.2405C23.061%2030.0295%2024.1542%2030.4637%2025.2874%2030.448C26.1575%2030.4517%2027.0087%2030.1952%2027.7319%2029.7114C28.455%2029.2276%2029.0169%2028.5386%2029.3454%2027.733H25.1944V24.746H32.4944C32.75%2025.9176%2032.7004%2027.1353%2032.3501%2028.2823C31.9999%2029.4292%2031.3609%2030.4669%2030.4944%2031.296C29.0984%2032.6464%2027.2297%2033.3975%2025.2874%2033.389ZM38.5874%2029.27H36.7204V26.782H34.1544V24.972H36.7204V22.483H38.5874V24.972H41.1534V26.782H38.5874V29.271V29.27Z'%20fill='%235044E5'/%3e%3cdefs%3e%3cfilter%20id='filter0_d_8593_1254'%20x='0'%20y='0'%20width='58.4766'%20height='58.478'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.161%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_8593_1254'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_8593_1254'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
