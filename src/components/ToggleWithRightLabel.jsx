/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function ToggleWithRightLabel(props) {
	const [enabled, setEnabled] = useState(false);

	return (
		<Switch.Group as='div' className='flex items-center'>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={classNames(
					enabled ? 'bg-yellow-400' : 'bg-gray-200',
					'relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900'
				)}>
				<span
					aria-hidden='true'
					className={classNames(
						enabled ? 'translate-x-5' : 'translate-x-0',
						'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
					)}
				/>
			</Switch>
			<Switch.Label as='span' className='ml-2 flex items-center'>
				<span className='text-sm text-gray-700'>{props.title}</span>
			</Switch.Label>
		</Switch.Group>
	);
}
