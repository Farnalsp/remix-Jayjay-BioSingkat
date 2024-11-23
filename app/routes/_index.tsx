import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Bio Jayjay" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
           Halo saya Farhan
          </h1>
          <p className="text-lg mt-3">
        Saya seorang Mahasiswa di salah satu perguruan tinggi di Indonesia dengan minat saya yaitu web development.
      </p>
      <p className="text-lg mb-3">
      Saya saat ini masih berkuliah dan sedang belajar di course Jayjay pada front end developer.
      </p>
        </header>
        <section className="border border-gray-300 p-4 rounded-md">
          <h2 className="text-lg font-semibold">Hobi Saya</h2>
          <ul className="list-none p-0">
            <li className="my-2">Technology</li>
            <li className="my-2">Gaming</li>
            <li className="my-2">Reading</li>
          </ul>
        </section>
        <div className="mt-8">
        <a href="mailto:farhan@jayjay.com" className="text-blue-500">farhan@example.com</a>
        <a href="https://www.instagram.com/farnalsp_01/" className="text-blue-500 ml-4">Instagram</a>
      </div>
      </div>
    </div>
  );
}
