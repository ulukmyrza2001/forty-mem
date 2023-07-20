import { useState } from 'react'
import ModalForQuestion from './components/ModalForQuestion'
import { AnimatePresence, motion } from 'framer-motion'
import LinkTg from './components/LinkTg'

export default function App() {
	const [open, setState] = useState(true)
	return (
		<div>
			<h1 className='text-[30px] text-center'>
				Development by Ulukmyrza
			</h1>
			<ModalForQuestion open={open} onClick={() => setState(false)} />

			<AnimatePresence>
				{!open && (
					<div className='w-full h-full fixed top-0 left-0 z-10 bg-slate-600 bg-opacity-70 flex items-center justify-center'>
						<motion.div
							layout
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ opacity: 0, y: -100 }}
							className='text-center w-[500px] p-4 py-10 bg-white shadow-lg rounded relative'
						>
							<h2 className='text-center text-[22px] font-semibold'>
								Кайдагы тоо ? Иштегиле давай 😂😂😂😂😂
							</h2>
							<br />
							<LinkTg />
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	)
}
