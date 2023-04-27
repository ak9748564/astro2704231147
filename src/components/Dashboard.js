import { Link } from "react-router-dom";
// import "./header.css";


import { CiGrid42 } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import { BsUpload } from 'react-icons/bs';
import { TbFileInvoice } from 'react-icons/tb';
import { ImCoinDollar } from 'react-icons/im';
import { CgLoadbarDoc } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { RiSettingsLine } from 'react-icons/ri';
import { CiPercent } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { VscTwitter } from 'react-icons/vsc';

import profile from "./images/3135715.png";

function Dashboard() {

  return (
    <div>
        <div className="flex w-full">
          <div className="w-[180px] grow-0 shrink-0">
            <div className="p-4 text-[14px] text-[#2a457d] font-medium leading-[14px] border-b">Inventory Management</div>
            <div className="border-r">
              <ul className="mb-4 pl-4">
                <li className="flex items-center my-4 cursor-pointer"
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[0].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[0].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[0].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[0].style.color = "#91979b";
                }}>
                  <CiGrid42 className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Dashboard</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[1].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[1].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[1].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[1].style.color = "#91979b";
                }}>
                  <CiGrid42 className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Inventory</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[2].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[2].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[2].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[2].style.color = "#91979b";
                }}>
                  <BsCart2 className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Purchase</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[3].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[3].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[3].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[3].style.color = "#91979b";
                }}>
                  <BsUpload className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Suppliers Return</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[4].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[4].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[4].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[4].style.color = "#91979b";
                }}>
                  <TbFileInvoice className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Invoice</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[5].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[5].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[5].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[5].style.color = "#91979b";
                }}>
                  <ImCoinDollar className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Sales</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[6].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[6].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[6].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[6].style.color = "#91979b";
                }}>
                  <CgLoadbarDoc className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Bill</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[7].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[7].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[7].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[7].style.color = "#91979b";
                }}>
                  <FiUsers className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Customers</p>
                </li>
                <li className="flex items-center my-4 cursor-pointer" 
                onMouseOver={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[8].style.color = "#5e8adc";
                  document.getElementsByClassName("sidebar_li_text")[8].style.color = "#5e8adc";
                }}
                onMouseOut={()=>{
                  document.getElementsByClassName("sidebar_li_icon")[8].style.color = "#91979b";
                  document.getElementsByClassName("sidebar_li_text")[8].style.color = "#91979b";
                }}>
                  <FiUsers className="text-[20px] text-[#91979b] hover:text-[#5e8adc] sidebar_li_icon"/>
                  <p className="text-[#91979b] hover:text-[#5e8adc] ml-1 text-[13px] font-medium sidebar_li_text">Suppliers</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shrink">
            <div className="h-[61px] flex justify-between items-center px-3 border-b">
              <div className="flex px-3 items-center h-[36px] bg-[#f6f7fa] rounded-full">
                <CiSearch className="text-[21px] text-[#a2a8ac]"/>
                <input type="text" className="w-[300px] h-[36px] bg-[#f6f7fa] px-2 outline-none placeholder:text-[#a2a8ac] placeholder:text-[12px] pb-[6px]" placeholder="Search Anything"/>
              </div>
              <div className="flex items-center">
                <div className="relative mx-1">
                  <div className="bg-[#f23a39] h-[6px] w-[6px] rounded-full absolute left-[12px] top-[-2px]"></div>
                  <BsBell className="text-[18px] text-[#989fa3] "/>
                </div>
                <div className="flex items-center bg-[#f7f8fa] rounded-full pr-3">
                  <div className="h-[28px] w-[28px] rounded-full mx-1">
                    <img src={profile}/>
                  </div>
                  <p className="text-[#74797c] text-[11px] font-medium mr-2">Deni Ginting</p>
                  <BsChevronDown className="text-[#74797c] text-[12px] "/>
                </div>
                <RiSettingsLine className="text-[21px] text-[#74797c] ml-2"/>
              </div>
            </div>
            <div className="user_list">
            <div className="p-[6px] bg-[#f7f8fa]">
              <div className="bg-white px-4 py-2 flex items-center">
                <div className="h-[28px] w-[28px] rounded-full bg-[#ecf2fe] flex items-center justify-center">
                  <CiPercent className="text-[16px] text-[#7398da]"/>
                </div>
                <p className="text-[#5c5f61] font-medium text-[14px] ml-1">Sales Order</p>
              </div>
            </div>
            <div className="p-6 bg-[#f7f8fa]">
              <div className="flex">
                <div className="h-[40px] w-[100px] flex items-center justify-center bg-white">
                  <p className="text-[12px] text-[#65686b] font-semibold">All</p>
                  <p className="h-[20px] px-2 rounded-full bg-[#3877f2] text-white text-[12px] leading-[20px] ml-2">150</p>
                </div>
                <div className="h-[40px] w-[100px] flex items-center justify-center bg-[#ecf2fe] ml-2">
                  <p className="text-[12px] text-[#65686b] font-semibold">Done</p>
                  <p className="h-[20px] px-2 rounded-full bg-[#3877f2] text-white text-[12px] leading-[20px] ml-2">150</p>
                </div>
              </div>
              <div className="p-3 bg-white flex items-center justify-between">
                <div className="flex justify-between items-center px-3">
                  <button className="text-white h-[30px] bg-[#3a78f1] text-[13px] px-3 rounded-md"
                  onClick={()=>{
                    document.getElementsByClassName("user")[0].style.display = "block";
                    document.getElementsByClassName("user_list")[0].style.display = "none";
                  }}>+ Create New</button>
                </div>
                <div className="flex">
                  <div className="flex px-3 items-center h-[28px] bg-[#f6f7fa] rounded-md">
                    <CiSearch className="text-[21px] text-[#a2a8ac]"/>
                    <input type="text" className="w-[120px] h-[28px] bg-[#f6f7fa] px-2 outline-none placeholder:text-[#a2a8ac] placeholder:text-[12px] pb-[6px]" placeholder="Search"/>
                  </div>
                  <div className="flex px-3 items-center h-[28px] bg-[#f6f7fa] rounded-md mx-2 cursor-pointer">
                    <MdDelete className="text-[21px] text-[#a2a8ac]"/>
                  </div>
                  <div className="flex px-3 items-center h-[28px] bg-[#ecf2fe] rounded-md cursor-pointer">
                    <p className="text-[#587fc9] text-[12px] font-medium">Export</p>
                    <BsFillCaretDownFill className="text-[10px] text-[#587fc9] ml-1"/>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white p-3">
                    <table className="w-full">
                      <thead className="w-full">
                        <tr className="w-full text-left">
                          <th>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </th>
                          <th>
                            <p className="text-[#a6acb0] text-[14px] font-medium">Customer Name</p>
                          </th>
                          <th>
                            <p className="text-[#a6acb0] text-[14px] font-medium">Quantity</p>
                          </th>
                          <th>
                          <p className="text-[#a6acb0] text-[14px] font-medium">Sales Order</p>
                          </th>
                          <th>
                          <p className="text-[#a6acb0] text-[14px] font-medium">Date</p>
                          </th>
                          <th>
                          <p className="text-[#a6acb0] text-[14px] font-medium">Expected Date</p>
                          </th>
                          <th>
                          <p className="text-[#a6acb0] text-[14px] font-medium">Amount</p>
                          </th>
                          <th>
                          <p className="text-[#a6acb0] text-[14px] font-medium">Status</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#77a877] text-[10px] font-medium px-2 py-1 bg-[#e6ffe9] inline rounded-md">Delivered</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#7194d3] text-[10px] font-medium px-2 py-1 bg-[#ecf2fe] inline rounded-md">Confirmed</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#f9cb88] text-[10px] font-medium px-2 py-1 bg-[#fff3df] inline rounded-md">Approved</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#de8d89] text-[10px] font-medium px-2 py-1 bg-[#fee5e6] inline rounded-md">Draft</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#77a877] text-[10px] font-medium px-2 py-1 bg-[#e6ffe9] inline">Delivered</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#77a877] text-[10px] font-medium px-2 py-1 bg-[#e6ffe9] inline">Delivered</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#77a877] text-[10px] font-medium px-2 py-1 bg-[#e6ffe9] inline">Delivered</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#77a877] text-[10px] font-medium px-2 py-1 bg-[#e6ffe9] inline">Delivered</p>
                          </td>
                        </tr>
                        <tr className="h-[40px]">
                          <td>
                            <input type="checkbox" className="h-[13px] w-[13px] rounded-sm"/>
                          </td>
                          <td>
                            <div className="flex items-center">
                              <div className="h-[28px] w-[28px] rounded-full mr-2">
                                <img src={profile}/>
                              </div>
                              <p className="text-[#7e8386] text-[12px] font-medium">Deni Ginting</p>
                            </div>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">50</p>
                          </td>
                          <td>
                            <p className="text-[#89a7d9] text-[12px] font-medium">90000150</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#8d9396] text-[12px] font-medium">20/10/2021</p>
                          </td>
                          <td>
                            <p className="text-[#77a877] text-[10px] font-medium px-2 py-1 bg-[#e6ffe9] inline">Delivered</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center">
                        <p className="text-[#9ca2a6] text-[13px] font-medium">Show</p>
                        <input type="number" className="h-[24px] w-[60px] border-2 rounded-sm ml-2" min={1}/>
                        <p className="text-[#9ca2a6] text-[13px] font-medium">entries</p>
                        <div className="flex items-center ml-4">
                          <p className="text-[#9ca2a6] text-[13px] font-medium">Showing&nbsp;</p>
                          <p className="text-[#9ca2a6] text-[13px] font-medium">1</p>
                          <p className="text-[#9ca2a6] text-[13px] font-medium">&nbsp;-&nbsp;</p>
                          <p className="text-[#9ca2a6] text-[13px] font-medium">10</p>
                          <p className="text-[#9ca2a6] text-[13px] font-medium">&nbsp;of&nbsp;</p>
                          <p className="text-[#9ca2a6] text-[13px] font-medium">100</p>
                          <p className="text-[#9ca2a6] text-[13px] font-medium">&nbsp;entries</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1 cursor-pointer"><AiOutlineLeft className="text-[12px] text-[#b1b4b6]"/></div>
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1 text-[12px] text-[#b1b4b6] cursor-pointer">1</div>
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1 text-[12px] text-[#b1b4b6] cursor-pointer">2</div>
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1 text-[12px] text-[#b1b4b6] cursor-pointer">3</div>
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1 text-[12px] text-[#b1b4b6] cursor-pointer">4</div>
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1 text-[12px] text-[#b1b4b6] cursor-pointer">5</div>
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1 text-[12px] text-[#b1b4b6] cursor-pointer">6</div>
                        <div className="w-[20px] h-[20px] rounded-sm flex items-center justify-center bg-[#f4f5f6] mx-1"><AiOutlineRight className="text-[12px] text-[#b1b4b6]"/></div>
                      </div>
                    </div>
              </div>
            </div>
            </div>
            <div className="user hidden">
            <div className="p-[6px] bg-[#f7f8fa]">
              <div className="bg-white px-4 py-2 flex items-center">
                <p className="text-[#5c5f61] font-medium text-[14px]">New Customer</p>
              </div>
            </div>
            <div className="p-6 bg-[#f7f8fa] flex justify-between items-center">
              <div>
              <div className="flex items-center my-2">
                <p className="text-[#6c6f71] text-[13px] font-semibold w-[200px]">Type</p>
                <div className="flex items-center">
                  <p className="text-[#7194d3] text-[10px] font-medium px-2 py-1 bg-[#ecf2fe] inline rounded-md">Business</p>
                  <p className="text-[#b0b4b6] text-[10px] font-medium px-2 py-1 bg-[#f1f1f1] inline rounded-md ml-3">Individual</p>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#6c6f71] text-[13px] font-semibold w-[200px]">Primary Contact</p>
                <div className="flex items-center">
                  <select className="h-[26px] w-[125px] bg-white border rounded-sm px-2 text-[#5d6062] text-[13px] font-medium ">
                    <option value="">Salutation</option>
                  </select>
                  <input type="text" className="mx-4 bg-white rounded-sm border outline-none h-[26px] w-[125px] placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium px-3" placeholder="First Name"/>
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-[125px] placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium px-3" placeholder="Last Name"/>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#6c6f71] text-[13px] font-semibold w-[200px]">Company Name</p>
                <div className="flex items-center">
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-[285px] placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium px-3" />
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#bf7570] text-[13px] font-semibold w-[200px]">Customer Display Name</p>
                <div className="flex items-center">
                  <select className="h-[26px] w-[285px] bg-white border rounded-sm px-2 text-[#5d6062] text-[13px] font-medium ">
                    <option value="">Stella Nebert</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#6c6f71] text-[13px] font-semibold w-[200px]">Customer Email</p>
                <div className="flex items-center">
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-[285px] placeholder:text-[#5d6062] placeholder:text-[14px] leading-[26px] font-medium px-3" placeholder="abc@gmail.com"/>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#6c6f71] text-[13px] font-semibold w-[200px]">Customer Phone</p>
                <div className="flex items-center">
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-[135px] placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium pr-[25px] px-3" placeholder="First Name"/>
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-[135px] placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium ml-4 px-3" placeholder="Last Name"/>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#6c6f71] text-[13px] font-semibold w-[200px]">Website</p>
                <div className="flex items-center">
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-[285px] placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium px-3" />
                </div>
              </div>
              </div>
              <div className="h-[160px] w-[160px] flex items-center justify-center bg-white rounded-full cursor-pointer choose_photo_div" 
              onClick={()=>{
                document.getElementsByClassName("profile_photo_input")[0].style.display = "block";
                document.getElementsByClassName("choose_photo_div")[0].style.display = "none";
              }}>
              <p className="text-[#6c6f71] text-[18px] font-semibold">Choose Photo</p>
              </div>
              <input type="file" className="profile_photo_input hidden" />
            </div>
            <div className="p-6 bg-[#f7f8fa]">
              <div className="flex">
                <div className="h-[40px] w-[100px] flex items-center justify-center bg-white">
                  <p className="text-[12px] text-[#65686b] font-semibold">Other Details</p>
                </div>
                <div className="h-[40px] w-[100px] flex items-center justify-center bg-[#ecf2fe] ml-2">
                  <p className="text-[12px] text-[#65686b] font-semibold">Address</p>
                </div>
                <div className="h-[40px] w-[130px] flex items-center justify-center bg-[#ecf2fe] ml-2">
                  <p className="text-[12px] text-[#65686b] font-semibold">Contact Persons</p>
                </div>
                <div className="h-[40px] w-[100px] flex items-center justify-center bg-[#ecf2fe] ml-2">
                  <p className="text-[12px] text-[#65686b] font-semibold">Address</p>
                </div>
                <div className="h-[40px] w-[100px] flex items-center justify-center bg-[#ecf2fe] ml-2">
                  <p className="text-[12px] text-[#65686b] font-semibold">Address</p>
                </div>
              </div>
              <div className="p-6 bg-white">
              <div className="flex items-center my-2">
                <p className="text-[#bf7570] text-[13px] font-semibold w-[200px]">Currency</p>
                <div className="flex items-center">
                  <select className="h-[26px] w-[285px] bg-white border rounded-sm px-2 text-[#5d6062] text-[13px] font-medium ">
                    <option value="">RM Malaysia</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#bf7570] text-[13px] font-semibold w-[200px]">Payment Terms</p>
                <div className="flex items-center">
                  <select className="h-[26px] w-[285px] bg-white border rounded-sm px-2 text-[#5d6062] text-[13px] font-medium ">
                    <option value="">Due On Receipt</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#bf7570] text-[13px] font-semibold w-[200px]">Payment Terms</p>
                <div className="flex items-center">
                  <select className="h-[26px] w-[285px] bg-white border rounded-sm px-2 text-[#5d6062] text-[13px] font-medium ">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#bf7570] text-[13px] font-semibold w-[200px]">Facebook</p>
                <div className="flex items-center w-[285px]">
                  <div className="h-[26px] w-[26px] flex items-center justify-center bg-[#f8f8f8]">
                    <RiFacebookFill className="text-[18px] text-[#1a62f0]"/>
                  </div>
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-full placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium px-3" />
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="text-[#bf7570] text-[13px] font-semibold w-[200px]">Twitter</p>
                <div className="flex items-center w-[285px]">
                  <div className="h-[26px] w-[26px] flex items-center justify-center bg-[#f8f8f8]">
                    <VscTwitter className="text-[15px] text-[#1a62f0]"/>
                  </div>
                  <input type="text" className="bg-white rounded-sm border outline-none h-[26px] w-full placeholder:text-[#a9b0b4] placeholder:text-[12px] leading-[26px] font-medium px-3" />
                </div>
              </div>
              <div className="flex">
                <button className="w-[235px] h-[30px] bg-[#3a78f2] text-white text-center rounded-md text-[12px]">Save</button>
                <button className="w-[235px] h-[30px] bg-[#d8d8d8] text-[#686c6f] text-center rounded-md text-[12px] ml-4">Cancel</button>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Dashboard;

