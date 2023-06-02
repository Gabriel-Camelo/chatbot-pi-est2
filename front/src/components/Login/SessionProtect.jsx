import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function SessionProtect() {
  const { token } = useContext(AuthContext);

  useEffect(() => {
      if (!token.access_token || token.access_token === 'denied')
        navigate('/login');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const navigate = useNavigate();

  return (
    <></>
  );
}

export default SessionProtect;