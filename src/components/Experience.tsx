function Experience() {
  return (
    <section
      className="
        py-16 md:py-24 
        px-4 sm:px-6 
        max-w-5xl mx-auto 
        relative z-10
      "
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 md:mb-16 text-center">
        Experience
      </h2>

      <div
        className="
          space-y-6 md:space-y-8 
          border-l border-zinc-700 
          pl-5 sm:pl-6 md:pl-10
        "
      >

        {/* YAKULT */}
        <div
          className="
            relative 
            bg-white/5 
            border border-white/10 
            p-5 sm:p-6 md:p-8 
            rounded-2xl md:rounded-3xl
          "
        >
          {/* DOT */}
          <div
            className="
              absolute 
              -left-[14px] md:-left-14 
              top-6 md:top-10 
              w-3 h-3 md:w-6 md:h-6 
              bg-blue-500 
              rounded-full
            "
          ></div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Yakult Việt Nam
          </h3>

          <p className="text-blue-400 mt-1 md:mt-2 text-sm sm:text-base">
            Staff 2 • 2023 - 2025
          </p>

          <ul className="list-disc ml-4 sm:ml-5 mt-4 md:mt-6 text-sm sm:text-base text-zinc-300 space-y-2 md:space-y-3 leading-6 md:leading-8">
            <li>Chăm sóc và tư vấn khách hàng</li>
            <li>Phát triển thị trường và doanh số</li>
            <li>Hỗ trợ quản lý hoạt động bán hàng</li>
          </ul>
        </div>

        {/* BHX */}
        <div
          className="
            relative 
            bg-white/5 
            border border-white/10 
            p-5 sm:p-6 md:p-8 
            rounded-2xl md:rounded-3xl
          "
        >
          {/* DOT */}
          <div
            className="
              absolute 
              -left-[14px] md:-left-14 
              top-6 md:top-10 
              w-3 h-3 md:w-6 md:h-6 
              bg-green-500 
              rounded-full
            "
          ></div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Bách Hóa Xanh
          </h3>

          <p className="text-green-400 mt-1 md:mt-2 text-sm sm:text-base">
            Trợ lý • 2020 - 2022
          </p>

          <ul className="list-disc ml-4 sm:ml-5 mt-4 md:mt-6 text-sm sm:text-base text-zinc-300 space-y-2 md:space-y-3 leading-6 md:leading-8">
            <li>Quản lý tồn kho và kiểm kê sản phẩm</li>
            <li>Hỗ trợ bán hàng trực tiếp</li>
            <li>Điều phối vận hành cửa hàng</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Experience