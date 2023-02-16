import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import SaveModal from './Modal/SaveModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import CalendarTodoModal from './Modal/CalendarTodoModal';
import { useLocation } from 'react-router-dom';


const CalendarPage = props => {
    const location = useLocation();
    const userId = location.state;
    console.log(userId + "userId");

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
                <SideBar setSaveIsOpen={setSaveIsOpen} userId={userId}></SideBar>

            </div>
            <div className='flex justify-center h-screen md:w-2/3 lg:w-3/4 xl:w-5/6 bg-slate-100'>
                <Calendar
                    formatDay={(locale, date) => moment(date).format("DD")}
                    navigationLabel={null}
                    showNeighboringMonth={false}
                    className="w-[600px] h-[400px] mt-40 text-sm border-0 rounded-xl  shadow-md"
                    onClickDay={(value) => clickHandler(value)}
                    tileClassName="h-12"


                ></Calendar>

            </div>

            {todoIsOpen && <CalendarTodoModal setTodoIsOpen={setTodoIsOpen} date={date} userId={userId} />}


            {saveIsOpen && <SaveModal setSaveIsOpen={setSaveIsOpen} />}

        </div >
    )

}
export default CalendarPage