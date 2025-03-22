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

export type OptionButtonItemProps = {
  optionLabel: string;
  option: string;
  index: number;
  onClick: (index: number) => void;
  isOptionSelected: boolean;
  isAnswerSubmitted: boolean;
  isOptionCorrect: boolean;
  isOptionIncorrect: boolean;
  correctAnswerOption: number;
};

export type OptionButtonProps = {
  options: string[];
  onClick: (id: number) => void;
  selectedOptionIndex: number | undefined;
  isAnswerSubmitted: boolean;
  correctAnswerOption: number;
};

export type QuizState = {
  theme: string;

  status: string;
  currentQuestionIndex: number;
  points: number;

  currentTitle: string;
  img: string;
  color: string;

  isUserSelectedOptionCorrect: boolean | null;
  isAnswerSubmitted: boolean;
  correctAnswerOption: number | undefined;
  isAnswerSubmittedWithoutSelectingOption: boolean;
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

export type ProgressBarProps = {
  progress: number;
};
