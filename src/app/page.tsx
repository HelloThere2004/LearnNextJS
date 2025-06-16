import Image from "next/image";


export default function Home() {
  return (
    <div className="home-content">
        <h1 className = "h1-home">Thám tử lừng danh Conan</h1>
        <h3 className = "text-home">Chào mừng bạn đến với trang web, đây là nơi sẽ chứa đựng thông tin về các vụ án nổi bật trong bộ truyện</h3>
        <div className="image-container">
          <Image src="/Home.jpg" alt="conan" width={700} height={700} />
        </div>
    </div>
  );
}
