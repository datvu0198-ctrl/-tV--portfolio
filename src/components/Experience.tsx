function Experience() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <h2 className="text-5xl font-black mb-16 text-center">
        Experience
      </h2>

      <div className="space-y-8 border-l border-zinc-700 pl-10">

        {/* YAKULT */}
        <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl">
          <div className="absolute -left-14 top-10 w-6 h-6 bg-blue-500 rounded-full"></div>
          <h3 className="text-3xl font-bold">Yakult Việt Nam</h3>
          <p className="text-blue-400 mt-2">Staff 2 • 2023 - 2025</p>
          <ul className="list-disc ml-5 mt-6 text-zinc-300 space-y-3 leading-8">
            <li>Chăm sóc và tư vấn khách hàng</li>
            <li>Phát triển thị trường và doanh số</li>
            <li>Hỗ trợ quản lý hoạt động bán hàng</li>
          </ul>
        </div>

        {/* BHX */}
        <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl">
          <div className="absolute -left-14 top-10 w-6 h-6 bg-green-500 rounded-full"></div>
          <h3 className="text-3xl font-bold">Bách Hóa Xanh</h3>
          <p className="text-green-400 mt-2">Trợ lý • 2020 - 2022</p>
          <ul className="list-disc ml-5 mt-6 text-zinc-300 space-y-3 leading-8">
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