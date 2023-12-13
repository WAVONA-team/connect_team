import Image from "next/image";
import { api } from "@/trpc/server";
import { type Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

const User: React.FC<Props> = async ({ params }) => {
  const user = await api.user.get.query({ id: params.id });

  const userInfo = [
    {
      label: "Имя",
      value: [user?.name],
    },
    {
      label: "Почта",
      value: [user?.email],
    },
    {
      label: "Проекты",
      value: [1, 2, 3],
    },
  ];

  return (
    <section className="flex gap-7">
      <div>
        {user?.image && user?.name ? (
          <Image src={user.image} alt={user.name} width={250} height={250} />
        ) : (
          <p>Фотографии нет</p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {userInfo.map((info) => {
          const { label, value } = info;

          return (
            <div key={label}>
              <span>{label}</span>

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

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const user = await api.user.get.query({ id: params.id });
  return {
    title: `${user?.name} profile`,
  };
};
