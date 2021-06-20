import { randomIntegerGenerator } from "./methods";
import { subjectList } from "./constants";

let availableSeats = [
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    0,
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    0,
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    0,
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    0,
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    0,
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15),
    randomIntegerGenerator(5,15)
]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(availableSeats);

export const classScheduleList = [
  {   id: 1,
      date: new Date("2021/05/03"),
      startTime: new Date('2021/05/03 16:00'),
      endTime: new Date('2021/05/03 17:00'),
      seatsAvailable: availableSeats[0],
      subject: subjectList.PYTHON,
      isBooked: false
  },
  {   id: 2,
      date: new Date("2021/05/10"),
      startTime: new Date('2021/05/03 16:00'),
      endTime: new Date('2021/05/03 17:00'),
      seatsAvailable: availableSeats[1],
      subject: subjectList.PYTHON,
      isBooked: false
  },
  {
      id:3,
      date: new Date("2021/05/17"),
      startTime: new Date('2021/05/17 16:00'),
      endTime: new Date('2021/05/17 17:00'),
      seatsAvailable: availableSeats[2],
      subject: subjectList.PYTHON,
      isBooked: false
  },
  {
      id:4,
      date: new Date("2021/05/24"),
      startTime: new Date('2021/05/24 16:00'),
      endTime: new Date('2021/05/24 17:00'),
      seatsAvailable: availableSeats[3],
      subject: subjectList.PYTHON,
      isBooked: false
  },
  {
      id:5,
      date: new Date("2021/05/31"),
      startTime: new Date('2021/05/31 16:00'),
      endTime: new Date('2021/05/31 17:00'),
      seatsAvailable: availableSeats[4],
      subject: subjectList.PYTHON,
      isBooked: false
  },
  {
      id:6,
      date: new Date("2021/06/07"),
      startTime: new Date('2021/06/07 16:00'),
      endTime: new Date('2021/06/07 17:00'),
      seatsAvailable: availableSeats[5],
      subject: subjectList.PYTHON,
      isBooked: false
  },
  {
      id:7,
      date: new Date("2021/06/14"),
      startTime: new Date('2021/06/14 16:00'),
      endTime: new Date('2021/06/07 17:00'),
      seatsAvailable: availableSeats[6],
      subject: subjectList.PYTHON,
      isBooked: false
  },
  {
      id:8,
      date: new Date("2021/05/05"),
      startTime: new Date('2021/05/05 17:00'),
      endTime: new Date('2021/05/05 18:00'),
      seatsAvailable: availableSeats[7],
      subject: subjectList.JAVA,
      isBooked: false
  },
  {
      id:9,
      date: new Date("2021/05/12"),
      startTime: new Date('2021/05/12 17:00'),
      endTime: new Date('2021/05/12 18:00'),
      seatsAvailable: availableSeats[8],
      subject: subjectList.JAVA,
      isBooked: false
  },
  {
      id:10,
      date: new Date("2021/05/19"),
      startTime: new Date('2021/05/19 17:00'),
      endTime: new Date('2021/05/19 18:00'),
      seatsAvailable: availableSeats[9],
      subject: subjectList.JAVA,
      isBooked: false
  },
  {
      id:11,
      date: new Date("2021/02/26"),
      startTime: new Date('2021/02/26 17:00'),
      endTime: new Date('2021/02/26" 18:00'),
      seatsAvailable: availableSeats[10],
      subject: subjectList.JAVA,
      isBooked: false
  },
  {
      id:12,
      date: new Date("2021/06/02"),
      startTime: new Date('2021/06/02 17:00'),
      endTime: new Date('2021/06/02 18:00'),
      seatsAvailable: availableSeats[11],
      subject: subjectList.JAVA,
      isBooked: false
  },
  {
      id:13,
      date: new Date("2021/06/09"),
      startTime: new Date('2021/06/09 17:00'),
      endTime: new Date('2021/06/09 18:00'),
      seatsAvailable: availableSeats[12],
      subject: subjectList.JAVA,
      isBooked: false
  },
  {
      id:14,
      date: new Date("2021/05/07"),
      startTime: new Date('2021/05/07 09:00'),
      endTime: new Date('2021/05/07 10:00'),
      seatsAvailable: availableSeats[13],
      subject: subjectList.HTML,
      isBooked: false
  },
  {
      id:15,
      date: new Date("2021/05/08"),
      startTime: new Date('2021/05/08 09:00'),
      endTime: new Date('2021/05/08 10:00'),
      seatsAvailable: availableSeats[14],
      subject: subjectList.HTML,
      isBooked: false
  },
  {
      id:16,
      date: new Date("2021/05/14"),
      startTime: new Date('2021/05/14 09:00'),
      endTime: new Date('2021/05/14 10:00'),
      seatsAvailable: availableSeats[15],
      subject: subjectList.HTML,
      isBooked: false
  },
  {
      id:17,
      date: new Date("2021/05/15"),
      startTime: new Date('2021/05/15 09:00'),
      endTime: new Date('2021/05/15 10:00'),
      seatsAvailable: availableSeats[16],
      subject: subjectList.HTML,
      isBooked: false
  },
  {
      id:18,
      date: new Date("2021/05/21"),
      startTime: new Date('2021/05/21 09:00'),
      endTime: new Date('2021/05/21 10:00'),
      seatsAvailable: availableSeats[17],
      subject: subjectList.HTML,
      isBooked: false
  },
  {
      id:19,
      date: new Date("2021/05/22"),
      startTime: new Date('2021/05/22 09:00'),
      endTime: new Date('2021/05/22 10:00'),
      seatsAvailable: availableSeats[18],
      subject: subjectList.HTML,
      isBooked: false
  },
  {
      id:20,
      date: new Date("2021/05/28"),
      startTime: new Date('2021/05/28 09:00'),
      endTime: new Date('2021/05/28 10:00'),
      seatsAvailable: availableSeats[19],
      subject: subjectList.HTML,
      isBooked: false
  }
]