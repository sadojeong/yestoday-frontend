import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import SaveModal from './Modal/SaveModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import CalendarTodoModal from './Modal/CalendarTodoModal';


const CalendarPage = props => {
    const userId = 1;

    const [date, setDate] = useState('2000-01-01');
    const [todoIsOpen, setTodoIsOpen] = useState(false);

    const [saveIsOpen, setSaveIsOpen] = useState(false);
    const showModal = () => {
        setSaveIsOpen(true);
    }

    const dateFormat = (date) => {
        console.log(date.getDate());
        const dateFormatted = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))
            + '-' + ((date.getDate()) < 10 ? "0" + (date.getDate()) : (date.getDate()));
        return dateFormatted;
    }



    const clickHandler = (value) => {
        setDate(dateFormat(value));
        setTodoIsOpen(true);
    }




    return (
        <div className='flex justify-center'>
            <div className='hidden border-r-2 sm:hidden md:inline md:w-1/3 lg:w-1/4 xl:w-1/6'>
                <SideBar setSaveIsOpen={setSaveIsOpen}></SideBar>

            </div>
            <div className='flex items-center justify-center md:w-2/3 lg:w-3/4 xl:w-5/6'>
                <Calendar
                    formatDay={(locale, date) => moment(date).format("DD")}
                    navigationLabel={null}
                    showNeighboringMonth={false}
                    className="w-[500px] h-full text-sm border-none rounded-xl"
                    onClickDay={(value) => clickHandler(value)}

                ></Calendar>

            </div>

            {todoIsOpen && <CalendarTodoModal setTodoIsOpen={setTodoIsOpen} date={date} userId={userId} />}


            {saveIsOpen && <SaveModal setSaveIsOpen={setSaveIsOpen} />}

        </div >
    )

}
export default CalendarPage