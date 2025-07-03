import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Users, Clock } from "lucide-react"

export default function CompetitionsPage() {
  const competitions = [
    {
      name: "玉入れ",
      emoji: "🏀",
      participants: "全学年",
      duration: "20分",
      rules: [],
      color: "green",
    },
    {
      name: "台風の目",
      emoji: "🌪️",
      participants: "チーム戦",
      duration: "25分",
      rules: [
        "一列に並び、長い棒を持ちます",
        "コーンの周りをグルンと回り、戻ってきて次の人たちに渡す",
        "早く終わったチームが勝ち",
      ],
      color: "blue",
    },
    {
      name: "しっぽ取り",
      emoji: "🏃‍♂️",
      participants: "チーム戦",
      duration: "30分",
      rules: [
        "パパか若い兄弟の腰に紐をベルト状に付け、細かく切った新聞紙をたくさん付けてヒラヒラさせる",
        "最初に小さい子たちが追いかけてしっぽを取り、残ったものを大きい子たちが取る",
        "大きい子たちの時は、全速力で逃げる。多くしっぽを取ったチームが勝ち",
      ],
      color: "red",
    },
    {
      name: "お菓子食い競争",
      emoji: "🍭",
      participants: "個人戦",
      duration: "20分",
      rules: [
        "棒にひもを垂らし、先についたお菓子を口で取る",
        "ゴールに走る（小さい子は手を使ってもok）",
        "お菓子を取ってゴールした人の勝ち",
      ],
      color: "purple",
    },
    {
      name: "エリコの城壁崩し",
      emoji: "🏰",
      participants: "4人チーム",
      duration: "35分",
      rules: [
        "段ボールを20個並べる（5列×4段）",
        "真ん中の列4段は赤い紐が付いていて、左右の列とくっつけて配置",
        "ボールを4個置き、順番にボールを蹴り、段ボールの城壁を崩す",
        "崩した段ボールの数が得点。赤紐段ボールを崩したら減点",
        "年齢に応じて、城壁との距離を変更可能",
      ],
      color: "orange",
    },
    {
      name: "障害物競争",
      emoji: "🏃‍♀️",
      participants: "2人チーム",
      duration: "40分",
      rules: [
        "1:ボールを足にはさんでジャンプ（5メートルくらい）←子どもがやる",
        "2:5メートル先に待つ人と、タオルにボールを載せて2人で運び、ボールを箱に入れる",
        "3:魚釣り 釣った魚（磁石を付けた魚）に借り物が書いてあるので二人で探して借りられたら二人で手をつないでゴール",
      ],
      color: "pink",
    },
    {
      name: "大縄跳び",
      emoji: "🪢",
      participants: "チーム戦",
      duration: "25分",
      rules: ["8の字に回す縄を何人が飛べるかを競う", "制限時間内に多く飛べたチームの勝ち"],
      color: "green",
    },
    {
      name: "リレー",
      emoji: "🏃‍♂️",
      participants: "チーム戦",
      duration: "30分",
      rules: [],
      color: "blue",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-50 to-yellow-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">🏃‍♂️ こども運動会</h1>
            <div className="flex gap-4">
              <Link href="/" className="text-blue-600 font-medium hover:text-blue-800">
                イベント紹介
              </Link>
              <Link href="/competitions" className="text-blue-600 font-medium hover:text-blue-800">
                競技紹介
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <ArrowLeft className="w-4 h-4" />
            イベント紹介に戻る
          </Button>
        </Link>
      </div>

      {/* Page Title */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🏆 競技紹介</h2>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-amber-50 border-2 border-amber-300">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  考慮されている競技ですが、当日は予定が変わる可能性があります。また、どなたでも参加できる競技もありますが、子供たちを最優先するため、参加できない場合もありますことをご了承ください。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitions Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {competitions.map((competition, index) => {
              const getColorClasses = (color: string) => {
                const colors: Record<string, string> = {
                  blue: "border-blue-200 bg-blue-50",
                  green: "border-green-200 bg-green-50",
                  red: "border-red-200 bg-red-50",
                  purple: "border-purple-200 bg-purple-50",
                  orange: "border-orange-200 bg-orange-50",
                  pink: "border-pink-200 bg-pink-50",
                }
                return colors[color] || "border-gray-200 bg-gray-50"
              }

              const getBadgeColor = (color: string) => {
                const colors: Record<string, string> = {
                  blue: "bg-blue-500",
                  green: "bg-green-500",
                  red: "bg-red-500",
                  purple: "bg-purple-500",
                  orange: "bg-orange-500",
                  pink: "bg-pink-500",
                }
                return colors[color] || "bg-gray-500"
              }

              return (
                <Card
                  key={index}
                  className={`shadow-lg border-2 ${getColorClasses(competition.color)} hover:shadow-xl transition-shadow`}
                >
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-2">{competition.emoji}</div>
                    <CardTitle className="text-2xl text-gray-800">{competition.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-500" />
                      <Badge className={`${getBadgeColor(competition.color)} text-white`}>
                        {competition.participants}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">予定時間: {competition.duration}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        ルール・ポイント
                      </h4>
                      <ul className="space-y-1">
                        {competition.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">皆さんにお会いできることを楽しみにしています。どうぞよろしくお願いします。</p>
          <div className="space-y-2">
            <p className="font-semibold">主催者一同</p>
            <div className="mt-4 space-y-1">
              <p>
                <strong>責任者</strong>
              </p>
              <p>小松陽平(多治見市星ケ台会衆)</p>
              <p>作田直樹(美濃加茂市古井会衆)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
