# 分治演算法

---

## 何謂分治法
  　　分治演算法(Divide & Conquer Paradigm)，依英文字面上的意思我們不難理解它能將一個問題先「分解」為小的問題解決，合併這些結果以「解決」原本的問題，也就是所謂的「分而治之」。
  > 　　事實上分治法並不是一個真正的演算法，依 Prardigm 中文的意思，它算是比較接近演算法的「範本」，也就是說它是一種概念、基礎，而許多演算法依此概念而生。

## 分治法與遞迴
  　　而通常最直接能實作分治法的解決方案即是遞迴
  > 雖然說通常遞迴是最直接的方法但是

## 分析
  　　我們通常拿到一個問題
  1. 分解：將原問題分解為若干個規模較小，相對獨立，與原問題形式相同的子問題。
  2. 解決：若子問題規模較小且易於解決時，則直接解。否則，遞迴地解決各子問題。
  3. 合併：將各子問題的解合併為原問題的解。



## 例題
  + ### [ZeroJudge] [a216. 數數愛明明](https://zerojudge.tw/ShowProblem?problemid=a216)
    > 數數是班上聰明又漂亮的女生，有一天……，她愛上了明明。
    > 
    > 她對明明說：「我們的愛，若是錯誤，願你我沒有白白受苦。呃，不是，我們的愛就像是函數！」
    > 
    > 明明說，「是啊，我對妳的愛是與日俱增呢！」
    > 
    > 數數開心地說，「你的意思是，你在第 n 天對我的愛若用函數 f(n) 來描述，那麼，f(n) = n + f(n-1)。也就是說，每一天都比前一天多了一單位的愛，並且與舊的愛累積起來嗎？」
    > 
    > 明明點了點頭，然後問，「那麼，妳呢？」
    > 
    > 數數說，「我在第 n 天對你的愛若是 g(n)，則會滿足 g(n) = f(n) + g(n-1) 關係！」
    > 
    > 於是，明明笑了笑，摟著數數說，我一定會更加愛妳的！
    > 
    > 註：在第一天的時候，f(1) = g(1) = 1

    1. 遞迴(遞歸)解法 Recursive Solution
        ```c
        #include<iostream>

        using namespace std;

        long long f(int n) {
            if(n == 1) return 1;
            return n + f(n-1);
        }

        long long g(int n) {
            if(n == 1) return 1;
            return f(n) + g(n-1);
        }

        int main() {
            int n;
            while(cin >> n) cout << f(n) << ' ' << g(n) << endl;

            return 0;
        }
        ```
    2. 迴圈(迭代)解法 Iterative Solution
        ```c
        #include<iostream>

        using namespace std;

        long long f(int n) {
            long long sum = 0;
            for(int i = 1; i <= n; i++)
                sum += i;

            return sum;
        }

        long long g(int n) {
            long long sum = 0;
            for(int i = 1; i <= n; i++)
                sum += f(i);

            return sum;
        }

        int main() {
            int n;
            while(cin >> n) cout << f(n) << ' ' << g(n) << endl;

            return 0;
        }
        ```
    3. 直接(公式)解法 Explicit Solution
        ```c
        #include<iostream>

        using namespace std;

        long long f(int n) {
            return (long long) n * (n+1) / 2;
        }

        long long g(int n) {
            return (long long) n * (n+1) * (n+2) / 6;
        }

        int main() {
            int n;
            while(cin >> n) cout << f(n) << ' ' << g(n) << endl;

            return 0;
        }
        ```
    
  + ### Quick Sort 快速排序法
    > 你之前可能有做過類似排序的題目，你可能是用最基本的 Bubble Sort 抑或是直接使用內建的排序法