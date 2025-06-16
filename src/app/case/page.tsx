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
            </div>
        </div>
        
    )
    
}