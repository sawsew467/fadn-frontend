import { Modal, Flex, Avatar, Divider } from "antd";

import * as S from "./styles";

function ProfileModal({ visible = false, userInfo, setIsShowProfile }) {
  return (
    <Modal open={visible} footer={[]} onCancel={() => setIsShowProfile(false)}>
      <Flex vertical align={"center"}>
        <S.Name>{`${userInfo?.firstName} ${userInfo?.lastName}`}</S.Name>
        <S.Avatar>
          <Avatar src={userInfo?.profileDTO?.avatar} alt="" size={150}></Avatar>
        </S.Avatar>
        <S.SubInfo gap={20} justify="space-between">
          <Flex vertical gap={8}>
            <p>Giới tính: {userInfo?.genderDTO?.name}</p>
            <p>Sở thích: {userInfo?.profileDTO?.hobbies}</p>
          </Flex>
          <Flex vertical gap={8}>
            <p>Ngày sinh: {userInfo?.dob}</p>
            <p>Nghề nghiệp: {userInfo?.profileDTO?.workAt}</p>
          </Flex>
        </S.SubInfo>
        <Divider />
        <S.Bio>{userInfo?.profileDTO?.intro}</S.Bio>
      </Flex>
    </Modal>
  );
}

export default ProfileModal;
