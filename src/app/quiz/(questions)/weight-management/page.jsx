import QuestionTpl from '../../../components/QuestionTpl'
import questions from '../../../data/questions'

const QuestionPage = () => {
  const question = questions[0]
  const options = questions[0]
  const path = '/quiz/full-meals'

  return <QuestionTpl question={question} options={options} path={path} />
}

export default QuestionPage
