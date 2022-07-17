import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout pageTitle="About">
      <h1>
        Hello, <br />
        it's nice to meet you!
      </h1>
      <p>I am a software engineer focused on frontend development.</p>

      <p>
        Currently as a Software Engineer (Frontend) Intern at Ninja Van
        Indonesia, I got this internship from Generasi GIGIH 2.0 by YABB & GoTO.
      </p>

      <p>
        Frontend engineer with a passion for test-based development and
        performance optimization. focuses on Javascript, TypeScript, React, and
        other modern frontend concepts.
      </p>
      <p>Enjoy learning and teaching others to grow together</p>
      <p>
        Born and raised in Probolinggo, Indonesia. Majoring in S1 Informatics
        Engineering at Nurul Jadid University. To channel the spirit of frontend
        development in general, I actively participate in the Probolinggo
        Developer technology organization. I enjoy sharing my learning journey
        with my fellow students by giving several lectures and writing several
        articles in Indonesian in my personal Medium publication.
      </p>
      <p>
        View my resume in <a href="#">PDF format.</a> Go to my{" "}
        <Link href="/contact">contact page</Link> to get in touch.
      </p>
    </Layout>
  );
}
