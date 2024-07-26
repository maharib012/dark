import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const options = [
    {
      icon: "sunny",
      text: "light"
    },
    {
      icon: "moon",
      text: "dark"
    },
    {
      icon: "desktop-outline",
      text: "system"
    }
  ];

  function onWindowMatch() {
    if (localStorage.getItem("theme") === "dark" || !("theme" in localStorage) && darkQuery.matches) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme])

  darkQuery.addEventListener("change", (e) => {
    // console.log(e);
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")
      }
    }
  })

  return (
    <section className="min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
        {
          options.map((option, index) => {
            return <button
              key={index}
              onClick={() => setTheme(option.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === option.text && "text-sky-600"}`}
            >
              <ion-icon name={option.icon}></ion-icon>
            </button>
          })
        }
      </div>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold">code a program</h2>
          <h5 className="my-5 text-xl font-bold">hello hi...</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatum distinctio, eos dolorem aut minima? Laborum, officiis minus illo mollitia temporibus quam voluptas minima numquam, expedita facilis eos saepe sed.
        </p>
        <b></b>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam eligendi laboriosam praesentium, ratione pariatur ab quae libero. Quis magni totam placeat nemo consectetur consequatur, minus repudiandae odit nam quia sed error ex ut eum iusto tenetur sapiente ullam non recusandae reiciendis doloribus corporis. Repellat deleniti voluptatum dolores totam natus ipsum ipsam ex molestiae, incidunt magnam officiis a alias dolore eos enim error eius animi temporibus repudiandae, cum sit doloribus ratione minima labore? Odio ratione sunt est illum vitae, inventore harum corporis ipsam velit odit tempore? In, dolorem quia debitis provident non recusandae natus pariatur. Perferendis reprehenderit ipsum hic delectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus ut laborum dolore sit, assumenda voluptates suscipit sequi labore, dolorum iusto incidunt eligendi provident accusantium explicabo deleniti! Voluptatibus facilis saepe totam mollitia reiciendis suscipit animi, tempora accusamus excepturi id recusandae sit repellat ratione minus explicabo autem doloribus quo ullam eos similique, repellendus in est nemo. Alias sit voluptas qui aliquam ipsa minus totam, tempore animi ad nostrum itaque nobis nihil quaerat cupiditate consectetur temporibus, velit recusandae odio! Alias reiciendis molestiae explicabo. Fuga labore, voluptatum architecto voluptatibus accusantium vitae repellendus alias aliquid dolorem aut explicabo aspernatur quod ullam, maiores consectetur quidem?
        </p>
      </div>
    </section>
  );
};

export default App;