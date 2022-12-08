import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

function Appointment() {
	const [name, setName] = useState("");
	const [dateAppointment, setDateAppointment] = useState(new Date());
	const [timeAppointment, setTimeAppointment] = useState("9:00");
	const [phoneNumber, setPhoneNumber] = useState("");

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_i6xko8a",
				"template_26qcdqs",
				form.current,
				"0cJaCNCk1HbcEu4yh"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="flex items-center text-2xl h-screen w-3/5 float-right bg-sky-500 flex-row">
			<form
				className="mx-auto space-x-10 space-y-10 basis-1/3 bg-sky-500"
				ref={form}
				onSubmit={sendEmail}
			>
				<label className="ml-10">
					{" "}
					Name
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Name"
						name="name"
						className="ml-10 block text-left"
					/>
				</label>
				<label className="inline-block float-left">
					Date of Appointment
					<DatePicker
						className="block text-left"
						name="date"
						selected={dateAppointment}
						closeCalender={true}
						onChange={(date) => setDateAppointment(date)}
					/>
				</label>
				<label className="inline-block">
					Time of Appointment
					<TimePicker
						className="bg-white-500"
						name="time"
						disableClock={true}
						value={timeAppointment}
						onChange={setTimeAppointment}
					/>
				</label>
				<label className="block text-left">
					Phone Number
					<input
						type="text"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						placeholder="Phone Number"
						name="phoneNumber"
						className="block text-left"
					/>
				</label>
				<button
					className="block text-left bg-orange-500 text-white"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Appointment;
