import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <img
          alt=""
          className="min-w-4 w-5 "
          src="data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.35156%2015.7002C9.24446%2016.362%2010.3304%2016.7502%2011.5016%2016.7502C12.6727%2016.7502%2013.7586%2016.362%2014.6516%2015.7002'%20stroke='%231C274C'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22%2011.7141V13.3112C22%2017.4071%2022%2019.4551%2020.7698%2020.7275C19.5397%2022%2017.5598%2022%2013.6%2022H9.4C5.4402%2022%203.46031%2022%202.23015%2020.7275C1%2019.4551%201%2017.4071%201%2013.3112V11.7141C1%209.31126%201%208.10984%201.54516%207.11388C2.09032%206.11792%203.0863%205.49979%205.07823%204.26354L7.17823%202.96021C9.28386%201.6534%2010.3367%201%2011.5%201C12.6633%201%2013.7161%201.6534%2015.8218%202.96021L17.9218%204.26353C19.9138%205.49979%2020.9097%206.11792%2021.4548%207.11388'%20stroke='%231C274C'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e"
        />
        <p className="hidden md:inline-block">Dashborad</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <img
          alt=""
          className="min-w-4 w-5 "
          src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.3031%2011.9973H12.0031M12.0031%2011.9973H8.70312M12.0031%2011.9973V8.69727M12.0031%2011.9973V15.2973'%20stroke='%231C274C'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M23%2012C23%2017.1854%2023%2019.7782%2021.389%2021.389C19.7782%2023%2017.1854%2023%2012%2023C6.81455%2023%204.22182%2023%202.61092%2021.389C1%2019.7782%201%2017.1854%201%2012C1%206.81455%201%204.22182%202.61092%202.61092C4.22182%201%206.81455%201%2012%201C17.1854%201%2019.7782%201%2021.389%202.61092C22.4602%203.68203%2022.8192%205.18721%2022.9394%207.6'%20stroke='%231C274C'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e"
        />
        <p className="hidden md:inline-block">Add Blog</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <img
          alt=""
          className="min-w-4 w-5 "
          src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.25%2014.6351L10.8215%2016.3951L14.75%2011.9951'%20stroke='%231C274C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2011.9943C1%206.80881%201%204.21609%202.61092%202.60518C3.97582%201.24027%206.04556%201.03183%209.8%201M23%2011.9943C23%206.80881%2023%204.21609%2021.389%202.60518C20.0242%201.24027%2017.9544%201.03183%2014.2%201'%20stroke='%231C274C'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M9.8%2022.9945C6.71971%2022.9945%205.17957%2022.9945%204.00306%2022.395C2.96816%2021.8678%202.12676%2021.0264%201.59947%2019.9915C1%2018.815%201%2017.2749%201%2014.1945C1%2011.1142%201%209.5741%201.59947%208.39759C2.12676%207.3627%202.96816%206.52129%204.00306%205.994C5.17957%205.39453%206.71971%205.39453%209.8%205.39453H14.2C17.2803%205.39453%2018.8204%205.39453%2019.997%205.994C21.0319%206.52129%2021.8733%207.3627%2022.4005%208.39759C23%209.5741%2023%2011.1142%2023%2014.1945C23%2017.2749%2023%2018.815%2022.4005%2019.9915C21.8733%2021.0264%2021.0319%2021.8678%2019.997%2022.395C18.8204%2022.9945%2017.2803%2022.9945%2014.2%2022.9945'%20stroke='%231C274C'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e"
        />
        <p className="hidden md:inline-block">Blog List</p>
      </NavLink>

      <NavLink
        end={true}
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <img
          alt=""
          className="min-w-4 w-5 "
          src="data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3ecomment-3%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set'%20sketch:type='MSLayerGroup'%20transform='translate(-204.000000,%20-255.000000)'%20fill='%23000000'%3e%3cpath%20d='M228,267%20C226.896,267%20226,267.896%20226,269%20C226,270.104%20226.896,271%20228,271%20C229.104,271%20230,270.104%20230,269%20C230,267.896%20229.104,267%20228,267%20L228,267%20Z%20M220,281%20C218.832,281%20217.704,280.864%20216.62,280.633%20L211.912,283.463%20L211.975,278.824%20C208.366,276.654%20206,273.066%20206,269%20C206,262.373%20212.268,257%20220,257%20C227.732,257%20234,262.373%20234,269%20C234,275.628%20227.732,281%20220,281%20L220,281%20Z%20M220,255%20C211.164,255%20204,261.269%20204,269%20C204,273.419%20206.345,277.354%20210,279.919%20L210,287%20L217.009,282.747%20C217.979,282.907%20218.977,283%20220,283%20C228.836,283%20236,276.732%20236,269%20C236,261.269%20228.836,255%20220,255%20L220,255%20Z%20M212,267%20C210.896,267%20210,267.896%20210,269%20C210,270.104%20210.896,271%20212,271%20C213.104,271%20214,270.104%20214,269%20C214,267.896%20213.104,267%20212,267%20L212,267%20Z%20M220,267%20C218.896,267%20218,267.896%20218,269%20C218,270.104%20218.896,271%20220,271%20C221.104,271%20222,270.104%20222,269%20C222,267.896%20221.104,267%20220,267%20L220,267%20Z'%20id='comment-3'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
        />
        <p className="hidden md:inline-block">Comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
