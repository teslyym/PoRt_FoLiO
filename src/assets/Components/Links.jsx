import React from "react";
import Header from "./Loader/Header";
import Background from "./Background";

const Links = () => {
  return (
    <div className="items-center  max-w-[1000px] mx-auto justify-center">
      <div>
        <Header />
        <Background />
        <div>
          <p className="font-poppins font-bold text-xl">Links</p>
        </div>
        <div className="flex flex-wrap w-1/2 gap-5">
          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[200px]">
            <div className="flex gap-6 items-center">
              <svg
                className="w-[30px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#c5c4c4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="font-poppins font-bold text-[gray]">mail</p>
            </div>
          </div>
          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[200px]">
            <div className="flex gap-6 items-center">
              <svg className="w-[20px]" viewBox="0 0 128 128">
                <path
                  fill="gray"
                  d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                ></path>
                <path
                  fill="#fff"
                  d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                ></path>
              </svg>

              <p className="font-poppins font-bold text-[gray]">linkedin</p>
            </div>
          </div>
          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[200px]">
            <div className="flex gap-6 items-center">
              <svg className="w-[20px]" viewBox="0 0 128 128">
                <g fill="gray">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  ></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </g>
              </svg>

              <p className="font-poppins font-bold text-[gray]">github</p>
            </div>
          </div>
          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[200px]">
            <div className="flex gap-6 items-center">
              <svg className="w-[20px]" viewBox="0 0 128 128">
                <path
                  fill="gray"
                  d="M101.072 82.51h11.378V128H10.05V82.51h11.377v34.117h79.644zm0 0"
                ></path>
                <path
                  fill="gray"
                  d="m33.826 79.13 55.88 11.738 2.348-11.166-55.876-11.745Zm7.394-26.748 51.765 24.1 4.824-10.349-51.768-24.1Zm14.324-25.384L99.428 63.53l7.309-8.775-43.885-36.527ZM83.874 0l-9.167 6.81 34.08 45.802 9.163-6.81Zm-51.07 105.254h56.89V93.881h-56.89Zm0 0"
                ></path>
              </svg>

              <p className="font-poppins font-bold text-[gray]">
                stackoverflow
              </p>
            </div>
          </div>
          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[200px]">
            <div className="flex gap-6 items-center">
              <svg className="w-[20px]" viewBox="0 0 128 128">
                <rect
                  fill="gray"
                  x="4.83"
                  y="4.83"
                  width="118.35"
                  height="118.35"
                  rx="6.53"
                  ry="6.53"
                ></rect>
                <path
                  fill="#fff"
                  d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                ></path>
              </svg>

              <p className="font-poppins font-bold text-[gray]">facebook</p>
            </div>
          </div>
          <div className="flex mt-[2rem] gap-5 border-[2px] table--shadow border-solid justify-around w-[200px]">
            <div className="flex gap-6 items-center">
              <svg
                className="w-[30px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#c5c4c4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="font-poppins font-bold text-[gray]">twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
