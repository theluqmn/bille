export default function Note() {
    return (
        <div class="pt-16 p-2">
            <h1 class="text-[rgb(255,255,255)] text-2xl">
                Note
            </h1>

            <div class="flex flex-col gap-4">
                <p class="text-[rgb(225,225,225)]">
                    We are not responsible for any errors or inconsistencies in the calculations. If you find any, head over
                    to the <a class="text-[rgb(22,236,106)]" href="https://github.com/theluqmn/bille">GitHub repository</a> and open an issue.
                </p>

                <p class="text-[rgb(225,225,225)]">
                    Don't see your country or provider listed? Feel free to open a pull request to add it.
                </p>

                <p class="text-[rgb(225,225,225)]">
                    Otherwise mentioned, Bille does not include other fees and charges that may be applicable.
                    These include but are not limited to minimum charges, imbalance cost pass through, and more.
                </p>

                <p class="text-[rgb(225,225,225)]">
                    Bille is not affliated with any countries, providers, or any other entities.
                </p>
            </div>
        </div>
    )
}