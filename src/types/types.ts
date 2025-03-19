export type TitleItemsProps = {
  item: {
    img: string;
    color: string;
    title: string;
  };
};

export type IconTitleProps = {
  img: string;
  title: string;
  color: string;
};

type QuestionProp = {
  question: string;
  answer: string;
  options: string[];
};

export type QuizItemProp = {
  title: string;
  icon: string;
  questions: QuestionProp[];
};

export type QuizQuestionProp = {
  questionData: QuestionProp[];
};

export type QuizPageProps = {
  title?: string;
};

export type OptionButtonItemProps = {
  optionLabel: string;
  option: string;
  index: number;
  onClick: (index: number) => void;
  isOptionSelected: boolean;
  isSubmitted: boolean;
  isOptionCorrect?: boolean;
  isOptionIncorrect?: boolean;
};

export type OptionButtonProps = {
  options: string[];
  onClick: () => void;
  selectedOptionIndex: number;
  isSubmitted: boolean;
};

export type QuizState = {
  currentQuestionIndex: number;
  points: number;

  currentTitle: string;
  img: string;
  color: string;

  isUserSelectedOptionCorrect: boolean | null;
  isAnswerSubmitted: boolean;
  correctAnswerOption: number | undefined;
};

export type TitlePayLoad = {
  title: string;
  img: string;
  color: string;
};

export type OptionPayLoad = {
  correctOption: string;
  userOption: string;
};
