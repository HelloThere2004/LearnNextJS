import CaseCard from "../components/CaseCard";

export default function Case() { 
    return (
        <div>
            <div>
                <h1>Danh sách các vụ án nổi bật trong Conan</h1>
            </div>
        
            <div className="case-container">
                <CaseCard link="/case1.jpg" title="Vụ án mạng tàu siêu tốc" />
                <CaseCard link="/case2.jpg" title="Vụ án phòng kín idol" />
                <CaseCard link="/case3.jpg" title="Sát nhân sau lớp quấn băng" />
                <CaseCard link="/case4.jpg" title="Vụ án bản Sonata Ánh Trăng" />
                <CaseCard link="/case5.jpg" title="Cô gái bí ẩn từ Tổ Chức Áo Đen" />
                <CaseCard link="/case6.jpg" title="Vụ án trong thư viện" />
                <CaseCard link="/case7.jpg" title="Vụ án ám sát nhà ngoại giao" />
                <CaseCard link="/case8.jpg" title="Bí mật đêm trăng tròn" />
                <CaseCard link="/case9.jpg" title="Chạm trán Tổ Chức Áo Đen" />
                <CaseCard link="/case10.jpg" title="Thuật dịch chuyển tức thời của Kaito Kid" />
                <CaseCard link="/case11.jpg" title="Conan đối đầu Kaito Kid" />

            </div>
        </div>
        
    )
    
}