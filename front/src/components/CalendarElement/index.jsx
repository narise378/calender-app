import React from "react";
import dayjs from "dayjs";
import { isSameDay, isSameMonth, isFirstDay, getMonth } from "../../services/calendar";
import { Typography } from "@material-ui/core"
import * as styles from "./style.css";

const CalendarElement = ({ day, month }) => {
    const today = dayjs();
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    const format = isFirstDay(day) ? "M月D日" : "D";
    const isToday = isSameDay(day, today);

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