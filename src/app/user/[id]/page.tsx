import { getServerAuthSession } from "@/server/auth";

import Image from "next/image";

const User: React.FC = async () => {
  const session = await getServerAuthSession();

  const userInfo = [
    {
      placeholder: "Имя",
      value: [session?.user.name],
    },
    {
      placeholder: "Почта",
      value: [session?.user.email],
    },
    {
      placeholder: "Проекты",
      value: [1, 2, 3],
    },
  ];

  return (
    <section className="flex gap-7">
      <div>
        {session?.user.image && session.user.name ? (
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={250}
            height={250}
          />
        ) : (
          <p>Фотографии нет</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {userInfo.map((info) => {
          const { placeholder, value } = info;

          return (
            <div key={placeholder}>
              <span>{placeholder}</span>

              {Array.isArray(value) ? (
                <div className="flex gap-4">
                  {value.map((el) => (
                    <p key={el}>{el}</p>
                  ))}
                </div>
              ) : (
                <p>{value}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default User;
