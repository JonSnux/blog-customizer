import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useState, useRef } from 'react';

type Props = {
	setPageState: (articleState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setPageState }: Props) => {
	const [isOpen, setOpen] = useState(false);
	const [state, setState] = useState(defaultArticleState);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setOpen(false);
		setPageState(state);
	};
	const updateField = (field: keyof ArticleStateType) => {
		return (option: OptionType) => {
			setState({ ...state, [field]: option });
		};
	};
	const resetForm = () => {
		setState(defaultArticleState);
		setPageState(defaultArticleState);
	};
	useOutsideClickClose({
		isOpen: isOpen,
		onChange: setOpen,
		rootRef: containerRef,
	});
	return (
		<div ref={containerRef}>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={submitForm} onReset={resetForm}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						selected={state.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={updateField('fontFamilyOption')}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						options={fontSizeOptions}
						selected={state.fontSizeOption}
						onChange={updateField('fontSizeOption')}
					/>
					<Select
						title='Цвет шрифта'
						selected={state.fontColor}
						options={fontColors}
						onChange={updateField('fontColor')}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={state.backgroundColor}
						options={backgroundColors}
						onChange={updateField('backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						selected={state.contentWidth}
						options={contentWidthArr}
						onChange={updateField('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
