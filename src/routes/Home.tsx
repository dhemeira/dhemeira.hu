import './Home.css';
import { ScrollAnim } from '../components/ScrollAnim';

export const Home = () => {
  return (
    <>
      <div className="container flex flex-col gap-8 md:gap-16">
        <div className="row content-between gap-y-14">
          <div className="hidden lg:block lg:col-1"></div>
          <div className="col-12 md:col-8 lg:col-6 xl:col-5 flex flex-col items-start justify-center gap-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
              Péter Lakics
              <div>
                <span className="bg-gradient-to-br from-dark-secondary dark:from-dark-primary dark:to-dark-accent to-light-accent text-transparent bg-clip-text inline-block">
                  Front-End
                </span>{' '}
                Developer
              </div>
            </h1>
            <div className="flex flex-col gap-4">
              <div>
                <p>
                  CS student & front-end developer from Hungary. Passionate about software
                  development, UI design, and all things tech. I love creating smooth, user-friendly
                  websites and bringing innovative ideas to life.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:block xl:col-1"></div>
          <div className="hidden md:flex col-4 items-center justify-center">
            <div className="hero-img aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"></div>
          </div>
          <div className="hidden lg:block lg:col-1"></div>
          <div className="col flex flex-col items-center gap-1">
            <ScrollAnim />
            <span className="text-sm">Scroll for more</span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 className="text-3xl leading-loose">Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sequi veniam
              voluptatibus eveniet deserunt aperiam nostrum ducimus eaque dicta et doloribus aut
              maiores dolores exercitationem corporis facilis debitis, molestiae cumque!
            </p>
            <p>
              Delectus soluta culpa commodi sit earum libero minus adipisci ullam nobis praesentium
              dolorum inventore distinctio, illo facere velit quos in, amet voluptatum corporis
              quas, esse nam natus enim iusto. Molestiae.
            </p>
            <p>
              Numquam molestias modi laudantium neque perspiciatis ipsa expedita doloremque enim?
              Deleniti, necessitatibus adipisci? Laboriosam nesciunt nihil, molestiae saepe quos
              impedit, ipsa sunt ea exercitationem magnam esse itaque pariatur obcaecati vero!
            </p>
            <p>
              Reprehenderit modi odio facilis ullam ea nesciunt deserunt excepturi quidem ducimus
              minima animi iure impedit vero ut molestias ipsum ipsa, eum provident consequatur a.
              Ipsam animi expedita distinctio nam possimus.
            </p>
            <p>
              Fuga, repudiandae dolore quas officiis eveniet similique aliquam totam aut temporibus
              veniam quos harum eius eum animi. Assumenda officia, repellendus obcaecati omnis,
              architecto cupiditate fuga rem aut, est modi perspiciatis.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="text-3xl leading-loose">Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit
              sapiente quis impedit officia vel quidem dignissimos. Natus ex, iure totam architecto
              rerum, pariatur delectus corrupti saepe magni nostrum neque!
            </p>
            <p>
              Saepe, ullam? Ex porro consectetur cupiditate ipsum fuga suscipit laboriosam adipisci
              eius provident consequuntur, sit, quibusdam alias qui laudantium amet voluptas
              voluptatibus molestias voluptate vel obcaecati officia, quisquam quam nihil!
            </p>
            <p>
              Nemo veritatis perspiciatis doloremque eos aperiam beatae a? Facere deserunt omnis
              obcaecati nemo voluptatibus officiis atque fugit consequuntur porro debitis! Officia
              odio repellat deleniti dolor distinctio quae perspiciatis assumenda qui?
            </p>
            <p>
              Quis optio possimus mollitia quidem consequatur quas hic ex eum, nam id necessitatibus
              est expedita similique quasi earum totam numquam ad saepe laboriosam tenetur veniam
              repellat cupiditate voluptates distinctio? Error.
            </p>
            <p>
              Dolorum sequi perspiciatis nostrum. Illo voluptas tempore consectetur aliquam velit
              quisquam laudantium magni ipsum sed corrupti possimus reprehenderit non quidem
              temporibus ipsam, voluptates ab sapiente incidunt enim perspiciatis obcaecati dolores!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
