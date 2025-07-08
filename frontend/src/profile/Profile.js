import React from "react";
import "./profile.css";

const profiles = [
  {
    fullName: "Nguyễn Văn Mùi",
    applicationPosition: "INTERN FRONTEND DEVELOPER",
    phone: "0387378690",
    email: "muinv2512@gmail.com",
    address: "Tân Triều, Thanh Trì, Hà Nội",
    github: "github.com/batacdat",
    image: "/anh_dai_dien.jpeg",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    projects: [
      {
        title: "Website bán hàng",
        time: "06/05/2025 - ??/??/2025",
        description:
          "Xây dựng website quản lý bán hàng với các chức năng cơ bản.",
        tech: "Frontend: HTML, CSS, Javascript. Backend: Spring Boot.",
        link: "https://github.com/batcadat/Demo_Website_QuanLyDoAn",
      },
      {
        title: "Website Profile cá nhân",
        time: "07/08/2025",
        description: "Show profile của bản thân. ",
        tech: "ReactJS, CSS",
        link: "https://batacdat.github.io",
      },
    ],
  },
  // Profile khác có thể thêm ở đây
];

export default function Profile() {
  return (
    <>
      {/* <nav className="navbar-default">
        <div class="logo">M</div>
        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav> */}
      <div className="cv-container">
        {/* Cột trái */}
        <div className="left-column">
          <div className="avatar-container">
            <img src={profiles[0].image} alt="Avatar" className="avatar" />
          </div>
          <h1>{profiles[0].fullName}</h1>
          <h2>{profiles[0].applicationPosition}</h2>

          <div className="contact">
            <p>
              <i className="fas fa-phone"></i>📞 {profiles[0].phone}
            </p>
            <p>
              <i className="fas fa-envelope"></i>✉️ {profiles[0].email}
            </p>
            <p>
              <i className="fas fa-github"></i>🔗 {profiles[0].github}
            </p>
            <p>
              <i className="fas fa-address"></i>📍 {profiles[0].address}
            </p>
          </div>

          <h3>Kỹ năng</h3>
          <ul className="skills">
            {profiles[0].skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Cột phải */}
        <div className="right-column">
          <h3>Mục tiêu nghề nghiệp</h3>
          <ul>
            <li>
              <p>Tôi muốn đăng ký vị trí thực tập trong công ty của bạn</p>
            </li>
            <li>
              <p>
                Tôi tìm cách áp dụng các kỹ năng lập trình, khả năng giải quyết
                vấn đề và logic
              </p>
            </li>
            <li>
              <p>
                Suy nghĩ để đóng góp cho việc xây dựng các giải pháp phần mềm
                hiệu quả và thực tế.
              </p>
            </li>
            <li>
              <p>
                Mục tiêu lâu dài của tôi là trở thành một người có tay nghề cao
                và có kinh nghiệm chuyên nghiệp.
              </p>
            </li>
          </ul>

          <h3>Giáo dục</h3>
          <div className="education">
            <p>Trường đại học Mở Hà Nội</p>
            <p>Khoa công nghệ thông tin (2022 - 2026) </p>
          </div>

          <h3>Dự án</h3>
          {profiles[0].projects.map((project) => (
            <ul key={project.title} className="project-card">
              <h4>
                {project.title} ({project.time})
              </h4>
              <li>
                <p>
                  <strong>Description: </strong> {project.description}
                </p>
              </li>
              <li>
                <p>
                  <strong>Công nghệ: </strong> {project.tech}
                </p>
              </li>
              <li>
                <p>
                  <strong>Link: </strong> <a>{project.link}</a>
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
