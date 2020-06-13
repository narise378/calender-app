import React from "react";
import dayjs from "dayjs";
import { isSomeDay, isSomeMonth, isFirstDay, getMonth } from "../../services/calendar";
import { Typography } from "@material-ui/core"
import * as styles from "./style.css";

const CalendarElement = ({ day, month }) => {

    const currentMonth = getMonth(month);
    const isCurrentMonth = isSomeMonth(day, currentMonth);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    const format = isFirstDay(day) ? "M月D日" : "D";

    const today = dayjs();
    const isToday = isSomeDay(day, today);

    return (
        <div className={styles.element}>
            <Typography
             className={styles.date}
             color={textColor}
             align="center"
             variant="caption"
             component="div"
            >
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    );
};

export default CalendarElement;