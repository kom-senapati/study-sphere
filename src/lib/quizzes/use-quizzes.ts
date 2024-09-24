import { useState } from 'react';
import { Quiz } from './types';
import { defaultQuizzes } from './default-quizzes';

export const useQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(defaultQuizzes);

  const createQuiz = (quiz: Quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  const updateQuiz = (id: string, updatedQuiz: Partial<Quiz>) => {
    setQuizzes(quizzes.map(quiz => (quiz.id === id ? { ...quiz, ...updatedQuiz } : quiz)));
  };

  const deleteQuiz = (id: string) => {
    setQuizzes(quizzes.filter(quiz => quiz.id !== id));
  };

  return {
    quizzes,
    createQuiz,
    updateQuiz,
    deleteQuiz,
  };
};