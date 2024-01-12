export default function GetPlanBtn() {
  const handleScrollToPlan = () => {
    const getMyPlan = document.getElementById('getMyPlan')

    if (getMyPlan) {
      getMyPlan.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      className="button button--small absolute right-0"
      onClick={handleScrollToPlan}
    >
      Get My Plan
    </button>
  )
}
