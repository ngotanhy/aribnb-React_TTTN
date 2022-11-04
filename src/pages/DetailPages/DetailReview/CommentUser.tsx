import _ from "lodash";
import React, { useEffect, useState } from "react";
import { http } from "../../../utils/setting";

type Props = {
  id: number|string;
  userCommentId: {
    noiDung: string;
    ngayBinhLuan: string;
  };
};

interface userComment {
  name: string;
  email: string;
  avatar: string;
}

export default function CommentUser({ id, userCommentId }: Props) {
  const [userComment, setUserComment] = useState<userComment>();
  const getUserComment = async () => {
    if (id) {
      let result = await http.get(`/users/${id}`);
      setUserComment(result.data.content);
    }
  };

  useEffect(() => {
    getUserComment();
  }, []);

 console.log(userComment)
  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center mb-2">
        <img
          src={userComment?.avatar? userComment.avatar:`https://picsum.photos/200/300?random=${_.random(1,1000)}`}
          alt="..."
          className="w-20 h-20 rounded-full"
        />
        <div className="text-lg">
          <h2 className="font-medium">{userComment?.name}</h2>
          <p>{userCommentId?.ngayBinhLuan}</p>
        </div>
      </div>
      <p className="text-base">{userCommentId?.noiDung}</p>
    </div>
  );
}
