import { AnimatePresence, motion } from 'framer-motion'

const ModalForQuestion = ({ onClick, open }) => {
	const mouseHandler = (e) => {
		const top = e.target.style.top
		const left = e.target.style.left
		if (!top) {
			e.target.style.top = 0
		}
		if (top === 0 || top === '0px') {
			e.target.style.left = 0
		}
		if (left === 0 || left === '0px') {
			e.target.style.left = '80%'
		}
		if (left === '80%') {
			e.target.style.top = '80%'
		}
		if (top === '80%') {
			e.target.style.top = 0
			e.target.style.left = '50%'
		}
		if (top === '0px' && left === '50%') {
			e.target.style.top = '50%'
			e.target.style.left = '50px'
		}
		if (top === '50%' && left === '50px') {
			e.target.style.top = 0
			e.target.style.left = 0
		}
	}
	return (
		<AnimatePresence>
			{open && (
				<div className='w-full h-full fixed top-0 left-0 z-10 bg-slate-600 bg-opacity-70 flex items-center justify-center'>
					<motion.div
						layout
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ opacity: 0, y: -100 }}
						className='text-center w-[500px] p-4 py-10 bg-white shadow-lg rounded relative'
					>
						<h2 className='text-center text-[22px] font-semibold'>
							Тоого барып эс алып келебизби) ?
						</h2>
						<br />
						<button
							onMouseMove={mouseHandler}
							className='px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 absolute top-25 left-[130px]'
						>
							Yes
						</button>
						<button
							onClick={onClick}
							className='px-10 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:bg-red-950 translate-x-[70px]'
						>
							No
						</button>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	)
}

export default ModalForQuestion
