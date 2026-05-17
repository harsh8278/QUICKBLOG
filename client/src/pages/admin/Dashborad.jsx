import React, { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashborad = () => {
  const [dashboradData, setDeshboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard");
      data.success
        ? setDeshboardData(data.dashboradData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img
            alt=""
            src="data:image/svg+xml,%3csvg%20width='17'%20height='1…p='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
          />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboradData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img
            alt=""
            src="data:image/svg+xml,%3csvg%20width='66'%20height='65'%20viewBox='0%200%2066%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='66'%20height='65'%20rx='10'%20fill='%23F6F8FF'/%3e%3cpath%20d='M45%2031.2894V43.3947C45.0012%2043.5146%2044.9659%2043.632%2044.8989%2043.7315C44.8319%2043.8309%2044.7363%2043.9076%2044.6247%2043.9515C44.5527%2043.9849%2044.4741%2044.0014%2044.3947%2043.9999C44.3137%2043.9999%2044.2335%2043.9838%2044.1587%2043.9526C44.0839%2043.9215%2044.016%2043.8758%2043.9589%2043.8184L41.7679%2041.5789H31.079C29.9553%2041.5789%2028.8776%2041.1325%2028.0831%2040.338C27.2885%2039.5434%2026.8421%2038.4657%2026.8421%2037.3421H35.921C37.5263%2037.3421%2039.0658%2036.7044%2040.2009%2035.5693C41.336%2034.4342%2041.9737%2032.8947%2041.9737%2031.2894V27.2342C42.8465%2027.4958%2043.612%2028.0314%2044.157%2028.7617C44.702%2029.492%2044.9975%2030.3782%2045%2031.2894ZM40.1579%2031.2894V25.2368C40.1579%2024.1132%2039.7115%2023.0355%2038.9169%2022.2409C38.1224%2021.4464%2037.0447%2021%2035.921%2021H26.2369C25.1132%2021%2024.0355%2021.4464%2023.241%2022.2409C22.4464%2023.0355%2022%2024.1132%2022%2025.2368V37.3421C21.9988%2037.462%2022.0341%2037.5794%2022.1011%2037.6788C22.1681%2037.7783%2022.2637%2037.855%2022.3753%2037.8989C22.4473%2037.9322%2022.5259%2037.9488%2022.6053%2037.9473C22.6863%2037.9473%2022.7665%2037.9312%2022.8413%2037.9C22.9161%2037.8689%2022.984%2037.8232%2023.0411%2037.7657L25.2321%2035.5263H35.921C37.0447%2035.5263%2038.1224%2035.0799%2038.9169%2034.2853C39.7115%2033.4908%2040.1579%2032.4131%2040.1579%2031.2894Z'%20fill='%235F6FFF'/%3e%3c/svg%3e"
          />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboradData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img
            alt=""
            src="data:image/svg+xml,%3csvg%20width='66'%20height='65'%20viewBox='0%200%2066%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='66'%20height='65'%20rx='10'%20fill='%23F6F8FF'/%3e%3cpath%20d='M44.5737%2018C45.3391%2018%2045.9604%2018.6272%2045.9604%2019.4V24.6598L33.4816%2037.2598L33.4733%2043.193L39.3611%2043.2014L45.9604%2036.5388V44.6C45.9604%2045.3728%2045.3391%2046%2044.5737%2046H22.3867C21.6212%2046%2021%2045.3728%2021%2044.6V19.4C21%2018.6272%2021.6212%2018%2022.3867%2018H44.5737ZM47.0392%2027.5312L49%2029.5108L38.2143%2040.4L36.2508%2040.3972L36.2536%2038.4204L47.0392%2027.5312ZM33.4802%2032H26.5468V34.8H33.4802V32ZM37.6403%2026.4H26.5468V29.2H37.6403V26.4Z'%20fill='%235F6FFF'/%3e%3c/svg%3e"
          />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboradData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img
            alt=""
            src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6637%2016.5578L16.1637%2013.3825L10.6637%2010.207V12.1603H5.83594V14.6047H10.6637V16.5578Z'%20fill='%235F6FFF'/%3e%3cpath%20d='M6.11285%204.88867C5.43784%204.88867%204.89062%205.43589%204.89062%206.11089C4.89062%206.7859%205.43784%207.33312%206.11285%207.33312H15.8906C16.5657%207.33312%2017.1128%206.7859%2017.1128%206.11089C17.1128%205.43589%2016.5657%204.88867%2015.8906%204.88867H6.11285Z'%20fill='%235F6FFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.66667%200C1.64163%200%200%201.64163%200%203.66667V18.3333C0%2020.3584%201.64163%2022%203.66667%2022H18.3333C20.3584%2022%2022%2020.3584%2022%2018.3333V3.66667C22%201.64163%2020.3584%200%2018.3333%200H3.66667ZM18.3333%202.44444H3.66667C2.99166%202.44444%202.44444%202.99166%202.44444%203.66667V18.3333C2.44444%2019.0084%202.99166%2019.5556%203.66667%2019.5556H18.3333C19.0084%2019.5556%2019.5556%2019.0084%2019.5556%2018.3333V3.66667C19.5556%202.99166%2019.0084%202.44444%2018.3333%202.44444Z'%20fill='%235F6FFF'/%3e%3c/svg%3e"
          />
          <p>Latest Blogs</p>
        </div>

        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboradData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
