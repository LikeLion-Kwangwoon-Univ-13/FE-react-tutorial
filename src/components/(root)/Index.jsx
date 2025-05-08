import { useNavigate } from "react-router-dom";
import Button from "../../design/Button";

const sessions = [
  {
    subject: "1. Git의 이해",
    pathname: "#",
  },
  {
    subject: "2. React와 JSX",
    pathname: "#",
  },
  {
    subject: "3. React와 JavaScript",
    pathname: "/sessions/3",
  },
  {
    subject: "4. Promise와 API 통신",
    pathname: "/sessions/4",
  },
  {
    subject: "5. 협업을 위한 준비",
    pathname: "#",
  },
  {
    subject: "6. 회고",
    pathname: "#",
  },
];

export default function Index() {
  const router = useNavigate();
  const redirect = (pathname) => {
    if (pathname === "#") return alert("준비 중이에요 :D");
    return router(pathname);
  };
  return (
    <div className="flex gap-x-3.5">
      {sessions.map((session) => (
        <Button
          key={session.pathname}
          title={session.subject}
          onClick={() => redirect(session.pathname)}
        />
      ))}
    </div>
  );
}
