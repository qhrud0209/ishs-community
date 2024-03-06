import { useEffect, useState } from "react";
import UserDemerit from "./UserDemerit";

import styles from "../../MyPage.module.css";
import DemeritList from "../../../../routes/Demerit";

export default function UserDemeritBox(props) {
    const [userDemerit, setuserDemerit] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(false);
      setuserDemerit(props.userDemerit);
    }, []);
  
    return (
      <div>
        <h1 className={styles.MySelectTitle}>누적 벌점</h1>
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (    
              <div>
                <UserDemerit userDemerit={userDemerit} />
                <DemeritList />
              </div>
          )}
        </div>
      </div>
    );
  }