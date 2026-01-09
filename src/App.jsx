import React from 'react';
import { Mail, MapPin, Globe, Award, GraduationCap, Code, BookOpen, Users, Target, Star, Trophy, FileText, User } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cherzing</h1>
              <p className="text-gray-600 mt-1">Java开发工程师 | 鸿蒙开发工程师</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:Cherzing@qq.com" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                Cherzing@qq.com
              </a>
              <a href="http://www.cherzing.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                <Globe className="w-5 h-5 mr-2" />
                www.cherzing.com
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Personal Info Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">个人简介</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      <span>南京工业大学浦江学院</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Award className="w-4 h-4 mr-2 text-blue-500" />
                      <span>学士学位 (2022.09 - 2026.06)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <FileText className="w-4 h-4 mr-2 text-blue-500" />
                      <span>英语四级 | 软著一篇 | 论文一篇</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 mr-2 text-blue-500" />
                      <span>连续三年国家励志奖学金</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">教育经历</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">南京工业大学浦江学院</h3>
              <p className="text-gray-600">学士学位 | 2022.09 - 2026.06</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">主修课程：</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java程序设计', 'JavaEE企业级开发', '数据结构', '计算机组成原理',
                  '操作系统', '计算机网络', '数据库原理', 'HTML+CSS+JavaScript', '微信小程序开发'
                ].map((course, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Trophy className="w-6 h-6 text-yellow-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">获奖经历</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* National Level */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                国家级
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>连续三年获得"国家励志奖学金"</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>第十一届全国大学生数字媒体科技作品及创意竞赛国赛三等奖</span>
                </li>
              </ul>
            </div>

            {/* Provincial Level */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                省级
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>蓝桥杯Java软件开发江苏省二等奖</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>第十一届全国大学生数字媒体科技作品及创意竞赛江苏省二等奖</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>全国大学生数学建模大赛江苏省三等奖</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>领航杯江苏省大学生信息技术技术应用能力比赛暨人工智能大赛三等奖</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>全国大学生软件测试大赛省赛优胜奖</span>
                </li>
              </ul>
            </div>

            {/* University Level */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                校级及其他
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>连续三年获得校级"三好学生"</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>连续两年获得校级"二等奖学金"、一次"三等奖学金"</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>校级"优秀寝室长"</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>软著一篇</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>《Artificial Intelligence Technology Research》论文一篇</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>英语四级</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">个人经历</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">省级大创核心开发成员</h3>
              <p className="text-gray-700 mb-3">担任《基于深度卷积神经网络和聚类分析的智能数字化果园系统》的开发人员</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>负责数据的清洗、数据集的标注、环境的配置、模型的训练及转化</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>负责Yolov8算法的改进</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">寝室长</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>全面负责寝室日常管理，协调成员关系，营造和谐氛围</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>建立卫生轮值制度，带领寝室获校级"文明宿舍"荣誉</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>获校级"优秀寝室长"称号，具备良好的沟通、组织与责任心</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">班级职业发展委员</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>负责收集并转发行业招聘、实习、考证等职业信息，搭建班级职业信息共享渠道，覆盖全班同学</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>对接学院就业指导中心，协调解决职业规划相关疑问，助力同学明确发展方向</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">技能清单</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">技术技能</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Java</span>
                      <span className="text-gray-600">熟悉</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Python</span>
                      <span className="text-gray-600">了解</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">其他技能</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    '常用IDE操作', '良好的文档写作能力', '英语听说读写能力',
                    '独立分析能力', '故障排查能力', '解决问题能力'
                  ].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Evaluation */}
        <section>
          <div className="flex items-center mb-6">
            <Target className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">个人评价</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">热爱技术，喜欢探索新技术，喜欢逛Github，时刻关注AI的发展</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">肯于吃苦，工作积极乐观，有着良好抗压能力</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">良好的独立分析，故障排查和解决问题能力，并能关注细节</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">CET-4，具备良好的英语听说读写能力；掌握常用IDE操作；具备良好的文档写作能力</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Cherzing. 期待与您的合作！</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
