import React from "react";
import UserSettingsForm from "@/modules/userSettingsForm/UserSettingsForm";
import Container from "@/ui/container/Container";

const UserSettings: React.FC = React.memo(() => {
  return (
    <Container>
      <UserSettingsForm />
    </Container>
  );
});

export default UserSettings;
