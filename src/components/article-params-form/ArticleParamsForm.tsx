import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
// import { Select } from 'src/ui/select';
// import { Text } from 'src/ui/text';
// import { RadioGroup } from 'src/ui/radio-group';
// import { Separator } from 'src/ui/separator';
// import {
// 	ArticleStateType,
// 	backgroundColors,
// 	contentWidthArr,
// 	defaultArticleState,
// 	fontColors,
// 	fontFamilyOptions,
// 	fontSizeOptions,
// 	OptionType,
// } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	return (
		<>
			<ArrowButton isOpen={false} onClick={() => {}} />
			<aside className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
