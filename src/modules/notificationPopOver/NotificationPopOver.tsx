import React from "react";
import { api } from "@/trpc/server";
import PopOver from "@/ui/popOver/PopOver";
import BellIcon from "@/ui/icons/bell/Bell";
import Image from "next/image";
import Link from "next/link";
type Props = {
  userId: string;
};
const NotificationPopOver: React.FC<Props> = React.memo(async ({ userId }) => {
  const notifications = await api.notifiaction.findByUserId.query(userId)
  return (
    <PopOver
      button={
        <button className="h-8 w-8">
          <BellIcon notifications={notifications.length}/>
        </button>
      }
      width="8"
      height="8"
    >
      {notifications.length ? (
        notifications.map((notification) => (
          <div className=" text-white flex flex-row justify-between">
            {notification.image !== null && (
              <Image src={notification.image} alt={notification.id} width={16} height={16}/>
            )}
            {notification.link ? (
              <Link href={notification.link}>{notification.message}</Link>
            ) : (
              <div>
                <p>{notification.message}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex items-center">
          <p className="text-base text-secondary-cadet-grey">
            У вас нет уведомлений!
          </p>
        </div>
      )}
    </PopOver>
  );
});

export default NotificationPopOver;
