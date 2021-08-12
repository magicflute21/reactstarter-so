/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import React from 'react'

const statuses = [
	{ id: 1, name: 'Created' },
	{ id: 2, name: 'Check In' },
	{ id: 3, name: 'Reception' },
	{ id: 4, name: 'Scope Confirmed' },
	{ id: 5, name: 'Quality Repair' },
	{ id: 6, name: 'Work Completed' },
	{ id: 7, name: 'Delivery' },
	{ id: 8, name: 'Gate Pass' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function SelectMenu(props) {
	const [selected, setSelected] = useState(statuses[1]);

	return (
		<div>
			<Listbox value={selected} onChange={setSelected}>
				{({ open }) => (
					<>
						<Listbox.Label className='block text-sm font-medium text-gray-700'>{props.label}</Listbox.Label>
						<div className='mt-1 relative'>
							<Listbox.Button className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
								<span className='block truncate'>{selected.name}</span>
								<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
									<SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</span>
							</Listbox.Button>

							<Transition show={open} as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
								<Listbox.Options
									static
									className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
									{statuses.map((status) => (
										<Listbox.Option
											key={status.id}
											className={({ active }) => classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
											value={status}>
											{({ selected, active }) => (
												<>
													<span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>{status.name}</span>

													{selected ? (
														<span className={classNames(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')}>
															<CheckIcon className='h-5 w-5' aria-hidden='true' />
														</span>
													) : null}
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</>
				)}
			</Listbox>
		</div>
	);
}
