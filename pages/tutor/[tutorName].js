import { useRouter } from "next/router";

const TutorDashboard = () => {
    const router = useRouter();

    return (
        <h1>{router.query.tutorName}</h1>
    );
}

export default TutorDashboard;