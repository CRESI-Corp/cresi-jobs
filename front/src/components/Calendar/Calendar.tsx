import React, { useState } from 'react';
import "./Calendar.css";

const Calendar: React.FC = () => {
  // Utilisation du hook useState pour gérer l'état de la date, de l'heure, et de la date sélectionnée
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const getMonthName = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const getWeekDays = (): JSX.Element[] => {
    const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    // Utilisation de map pour créer un élément <th> pour chaque jour de la semaine
    return weekDays.map((day) => <th key={day}>{day}</th>);
  };

  const getCalendarDays = (): JSX.Element[] => {
    const currentMonth = date.getMonth();
    const daysInMonth = new Date(date.getFullYear(), currentMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(date.getFullYear(), currentMonth, 1).getDay();

    const calendarDays: JSX.Element[] = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week: JSX.Element[] = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
          week.push(<td key={`${i}-${j}`}></td>);
        } else {
          const currentDate = new Date(date.getFullYear(), currentMonth, dayCounter);
          const isCurrentDateSelected =
            selectedDate && currentDate.toDateString() === selectedDate.toDateString();
          const dayClassName = isCurrentDateSelected ? 'selected' : '';
          week.push(
            // Ajout d'une cellule pour le jour du mois, avec une classe "selected" si c'est la date sélectionnée
            <td
              key={`${i}-${j}`}
              className={dayClassName}
              onClick={() => handleDateClick(currentDate)}
            >
              {dayCounter}
            </td>
          );
          dayCounter++;
        }
      }
      // Ajout de la semaine dans le tableau des jours du calendrier
      calendarDays.push(<tr key={i}>{week}</tr>);
    }

    return calendarDays;
  };

  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const handleDateClick = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="calendar">
      <div className="header">
        {/* Bouton pour passer au mois précédent */}
        <button className='btn-fleche' onClick={handlePreviousMonth}>&lt;</button>
        {/* Affichage du nom du mois */}
        <h2>{getMonthName(date)}</h2>
        {/* Bouton pour passer au mois suivant */}
        <button className='btn-fleche' onClick={handleNextMonth}>&gt;</button>
      </div>
      {/* Tableau pour afficher les jours du calendrier */}
      <table>
        <thead>
          <tr>{getWeekDays()}</tr>
        </thead>
        <tbody>{getCalendarDays()}</tbody>
      </table>
      <div className="selected-date">
        <p>Date sélectionnée : {selectedDate ? selectedDate.toLocaleDateString('fr-FR') : ''}</p>
        <p>Heure sélectionnée : {selectedTime}</p>
      </div>
      <div>
        <p>Choisir une heure :</p>
        <input type="time" value={selectedTime} onChange={handleTimeChange} />
      </div>
    </div>
  );
};

export default Calendar;