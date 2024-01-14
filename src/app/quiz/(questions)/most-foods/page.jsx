import QuestionTpl from '../../../components/QuestionTpl'
import questions from '../../../data/questions'

const QuestionPage = () => {
  const question = questions[2]
  const options = questions[2].options
  const path = '/quiz/height'

  return <QuestionTpl question={question} options={options} path={path} />
}

export default QuestionPage
