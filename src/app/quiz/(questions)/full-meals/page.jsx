import QuestionTpl from '../../../components/QuestionTpl'
import questions from '../../../data/questions'

const QuestionPage = () => {
  const question = questions[1]
  const options = questions[1]
  const path = '/quiz/most-foods'

  return <QuestionTpl question={question} options={options} path={path} />
}

export default QuestionPage
